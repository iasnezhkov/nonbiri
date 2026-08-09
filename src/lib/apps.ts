import type { CollectionEntry } from 'astro:content';

type App = CollectionEntry<'apps'>;

export type TranslatedApp = App & { data: { ja: NonNullable<App['data']['ja']> } };

export function isTranslated(app: App): app is TranslatedApp {
  return app.data.ja !== undefined;
}

interface SchemaOptions {
  name: string;
  description: string;
  url: string;
  image: string;
  inLanguage: string;
}

export function softwareApplicationSchema(data: App['data'], options: SchemaOptions) {
  const store = data.links.appStore ?? data.links.playStore;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: options.name,
    alternateName: data.ja?.name,
    applicationCategory: 'EducationalApplication',
    operatingSystem: data.platforms.join(', '),
    description: options.description,
    url: options.url,
    image: options.image,
    inLanguage: options.inLanguage,
    availableLanguage: data.languages,
    author: {
      '@type': 'Person',
      name: 'Ilia Snezhkov',
      url: 'https://nonbiri.dev/about',
    },
    ...(store ? { downloadUrl: store } : {}),
  };
}
