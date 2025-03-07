import { Logo } from 'src/components/Logo/Logo';

const categories = [
  {
    title: 'Shepherd Pro',
    items: [
      { route: '/', title: 'Home' },
      { route: '/signin', title: 'Sign In' },
      { route: '/signup', title: 'Sign Up' },
    ],
  },
  {
    title: 'Shepherd',
    items: [
      { route: 'https://github.com/shepherd-pro/shepherd', title: 'Github' },
      { route: 'https://shepherdjs.dev', title: 'Open Source Demo' },
      { route: 'https://docs.shepherdpro.com/', title: 'Open Source Docs' },
      { route: 'https://shepherdjs.dev/blog', title: 'Blog' },
    ],
  },
  // {
  //   title: 'More Info',
  //   items: [
  //     { route: 'https://shepherdjs.dev/pro', title: 'Pricing' },
  //     { route: 'https://shepherdjs.dev/pro/examples', title: 'Pro Examples' },
  //     {
  //       route: 'https://shepherdjs.dev/pro/case-studies',
  //       title: 'Case Studies',
  //     },
  //     { route: 'https://shepherdjs.dev/pro/enterprise', title: 'Enterprise' },
  //   ],
  // },
  {
    title: 'Our Friends @ Polychrome',
    items: [
      // { route: 'https://www.polychrome.com/#contact', title: 'Contact Us' },
      { route: 'https://www.polychrome.com/blog', title: 'Blog' },
      { route: 'https://www.polychrome.com/#team', title: 'About' },
      { route: 'https://www.polychrome.com/#portfolio', title: 'Portfolio' },
    ],
  },
  // {
  //   title: 'Legal',
  //   items: [
  //     {
  //       title: 'Terms of Use',
  //       route: 'https://example.com/terms-of-use',
  //     },
  //     {
  //       title: 'Ethical Standards',
  //       route: 'https://example.com/ethical-standards',
  //     },
  //     {
  //       title: 'Privacy Policy',
  //       route: 'https://example.com/privacy',
  //     },
  //     { title: 'Imprint', route: 'https://example.com/imprint' },
  //   ],
  // },
];

const alt =
  'Shepherd Pro gives developers a component library and SDKs to build seamless onboarding and education experiences in minutes.';

export default function Footer({
  message = {
    title: 'Shepherd Pro',
    text: '',
  },
}) {
  return (
    <footer className="lg:py-18 border-t border-navy bg-white py-12 print:bg-transparent">
      <div className="mx-auto max-w-7xl px-4 text-black lg:flex">
        <div className="shrink-0 md:max-w-[600px] lg:mr-24 lg:max-w-[300px]">
          {message && (
            <>
              <Logo alt={message.title} />
              <div className="mb-6 font-heading text-2xl leading-none tracking-tight lg:mb-10">
                {message.text}
              </div>
            </>
          )}
        </div>
        <div className="grow">
          <div className="flex h-[100%] grow flex-col">
            <div className="grid-gap-4 grid grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <div key={category.title} className="mt-4 lg:mt-0">
                  <span className="text-light mb-2 font-bold text-gray-800">
                    {category.title}
                  </span>
                  {category.items.map((item) => (
                    <a
                      href={item.route}
                      className="block text-slate-500"
                      key={item.title}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            <span className="mt-auto pt-6 text-sm text-gray-300">
              <a href="mailto:hello@shepherdpro.com">hello@shepherdpro.com</a>
              {` — Copyright © ${new Date().getFullYear()}. All rights reserved.`}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
