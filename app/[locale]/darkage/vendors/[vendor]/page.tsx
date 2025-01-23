import { Metadata } from 'next';
import { darkAge as darkAgeVendors } from '@3rdParties/vendors/vendors.json';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Dark Age Vendors',
  description: 'Upcomming Event - Dark Age - Vendors',
};

export async function generateStaticParams() {
  return [
    {
      vendor: 'gavins-cookies',
    },
    {
      vendor: 'stacies-cookies',
    },
  ];
}

export default async function Page({ params }: { params: { slug: string } }) {
  const t = await getTranslations();
  const { slug } = params;
  const vendorInfo = darkAgeVendors.find((vendor) => vendor.slug === slug);
  if (vendorInfo === undefined) {
    return <div>idk a {slug}</div>;
  }
  // ...

  return (
    <div>
      <h1>Dark Age proudly presents {vendorInfo.name}</h1>
      <div>
        {vendorInfo.desc} - {t('welcome')}
      </div>
    </div>
  );
}
