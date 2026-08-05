import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sections = [
  {
    title: '1. Acceptance',
    body: [
      'By using the PaperShoes website you agree to these Terms of Use. If you do not agree with them, please do not use the site.',
    ],
  },
  {
    title: '2. About the Campaign Content',
    body: [
      'This site describes the PaperShoes campaign: 80 marathons in 80 days across 12 Indian cities, along with education, cleanup and awareness work.',
      'Route plans, dates, distances and impact goals are stated intentions and may change due to weather, permissions, health or logistics. Nothing on this site is a guarantee that a specific event will take place as described.',
      'Environmental figures and visualisations are drawn from public research and are presented for awareness, not as scientific or legal advice.',
    ],
  },
  {
    title: '3. Participation',
    body: [
      'Volunteering, running, cleanup and workshop activities are undertaken at your own risk. Participants are responsible for their own health, safety, insurance and travel, and must follow the instructions of local organisers and authorities.',
      'We may decline or withdraw participation where behaviour is unsafe, unlawful or inconsistent with the spirit of the campaign.',
    ],
  },
  {
    title: '4. Donations',
    body: [
      'Donations are collected through our GoFundMe page and are governed by GoFundMe\u2019s terms. Funds support campaign logistics, education material, cleanup operations and documentation.',
      'Donations are voluntary and generally non-refundable. Unless stated otherwise, they are not represented as tax-deductible.',
    ],
  },
  {
    title: '5. Shop and Merchandise',
    body: [
      'The shop is currently in a "coming soon" state. Product images, names and prices shown are previews and may change before merchandise goes on sale.',
    ],
  },
  {
    title: '6. Intellectual Property',
    body: [
      'The PaperShoes name, logo, campaign copy, photography, film footage and graphics on this site belong to the PaperShoes team or its contributors.',
      'You may share and quote our material for non-commercial awareness purposes with credit to PaperShoes. Commercial use, resale or use implying endorsement requires our written permission.',
    ],
  },
  {
    title: '7. Third-Party Links',
    body: [
      'The site links to external services such as Google Forms, GoFundMe, YouTube and Instagram. We do not control those sites and are not responsible for their content or practices.',
    ],
  },
  {
    title: '8. Limitation of Liability',
    body: [
      'The site is provided on an "as is" basis. To the fullest extent permitted by law, PaperShoes and its volunteers are not liable for any loss arising from use of the site or reliance on information published here.',
    ],
  },
  {
    title: '9. Changes and Contact',
    body: [
      'We may update these terms as the campaign develops. Continued use of the site after an update means you accept the revised terms.',
      'Questions? Email info@paper.shoes.',
    ],
  },
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Terms of Use</h1>
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
            See also our <Link to="/privacy" className="text-sage-dark font-semibold hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
