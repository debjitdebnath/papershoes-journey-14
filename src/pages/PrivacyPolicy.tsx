import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sections = [
  {
    title: '1. Who We Are',
    body: [
      'PaperShoes is an environmental awareness campaign — 80 marathons in 80 days across India — run by a small volunteer team. This page is maintained by the PaperShoes team to explain, in plain language, what information we collect through this website and how we handle it.',
    ],
  },
  {
    title: '2. Information We Collect',
    body: [
      'Information you give us: your name, email address, phone number, organisation and message when you fill in one of our sign-up forms (Volunteer, Schools, Corporate, Media) or subscribe to our newsletter.',
      'Information collected automatically: basic technical data such as browser type, device type, approximate region and the pages you visit, used only to understand how the site is being used.',
      'We do not knowingly collect sensitive personal data, and we do not collect information from children without a parent or school representative acting on their behalf.',
    ],
  },
  {
    title: '3. How We Use Your Information',
    body: [
      'To respond to your enquiry and coordinate your participation in cleanups, workshops, partnerships or press activity.',
      'To send campaign updates and impact stories, if you have asked for them.',
      'To improve the website and report aggregate, non-identifying campaign reach to partners and municipalities.',
      'We do not sell your personal information, and we do not use it for advertising profiling.',
    ],
  },
  {
    title: '4. Forms and Third-Party Services',
    body: [
      'Our sign-up forms are hosted on Google Forms, so the information you submit there is stored in Google Workspace and handled under Google\u2019s own privacy terms.',
      'Donations are processed on GoFundMe. We never see or store your card or bank details.',
      'Video content is embedded from YouTube, which may set cookies when you play a video.',
      'These providers act as independent services; please review their privacy policies for details on their processing.',
    ],
  },
  {
    title: '5. Cookies',
    body: [
      'This site uses only the cookies required for it to work and for embedded third-party content (such as YouTube players). You can block or delete cookies in your browser settings; the site will continue to function, though embedded videos may not.',
    ],
  },
  {
    title: '6. Retention and Deletion',
    body: [
      'We keep sign-up and newsletter data only for as long as the campaign and its follow-up reporting require, and delete it when it is no longer needed.',
      'You can ask us at any time to see, correct or delete the information you have given us by writing to info@paper.shoes. We will respond as promptly as we reasonably can.',
    ],
  },
  {
    title: '7. Security',
    body: [
      'We limit access to submitted information to the volunteers who need it, and rely on the security controls of the platforms we use. No online service can be guaranteed to be perfectly secure, so please share only what is necessary.',
    ],
  },
  {
    title: '8. Changes and Contact',
    body: [
      'We may update this policy as the campaign evolves; the revised date below will always reflect the latest version.',
      'Questions about privacy? Email us at info@paper.shoes.',
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Privacy Policy</h1>
          <p className="text-muted-foreground text-base mb-10">Last updated: 5 August 2026</p>

          <div className="space-y-8">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-xl font-bold text-foreground mb-3">{s.title}</h2>
                <div className="space-y-3">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-base text-muted-foreground leading-relaxed">{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <p className="mt-12 text-sm text-muted-foreground">
            See also our <Link to="/terms" className="text-sage-dark font-semibold hover:underline">Terms of Use</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
