import { COMPANY } from '@/lib/constants/company'

export default function PrivacyPage() {
  return (
    <section className='wrapper max-w-2xl pt-10'>
      <div className='grid gap-5 [&_p]:text-muted-foreground [&_p]:text-base [&_p]:leading-normal [&_p]:text-pretty [&_p]:max-w-prose [&_ul]:text-base [&_ul]:leading-normal [&_ul]:text-muted-foreground [&_ul]:max-w-prose [&_ul]:grid [&_ul]:gap-3 [&_strong]:text-foreground [&_strong]:font-semibold [&_h2]:font-heading [&_h4]:font-semibold [&_h2]:mt-6 [&_h2]:lg:mt-8 [&_h2]:text-2xl [&_h3]:text-xl [&_h3]:mt-6 [&_h2]:font-semibold [&_h3]:font-semibold [&_p>code]:bg-muted [&_p>code]:py-0.5 [&_p>code]:px-1 [&_p>code]:rounded-md [&_p>code]:border [&_p>code]:text-sm [&_p>code]:text-foreground [&_li>code]:bg-muted [&_li>code]:py-0.5 [&_li>code]:px-1 [&_li>code]:rounded-md [&_li>code]:border [&_li>code]:text-sm [&_li>code]:text-foreground [&_a]:text-foreground [&_a]:font-medium [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 [&_ul]:pl-5 [&_ul]:marker:text-primary/40 [&_ul]:list-disc'>
        <h1 id='documentation' className='text-3xl md:text-4xl -mb-2 font-heading font-bold'>
          Privacy policy
        </h1>

        <p>Last updated: September 13, 2026</p>

        <p>
          This privacy policy explains how {COMPANY.fullName} ("{COMPANY.fullName}", "we", "us", or
          "our") handles information when you visit and use our documentation website and related
          services.
        </p>

        <p>
          {COMPANY.fullName} is an open-source icon library and its documentation website is
          intended primarily to provide information, documentation, examples, and resources for
          developers and designers using the library.
        </p>

        <h2>1. Information we collect</h2>

        <p>
          We do not require you to create an account or provide personal information to browse and
          use the {COMPANY.fullName} documentation website.
        </p>

        <p>
          We do not intentionally collect personal information such as your name, email address,
          telephone number, or physical address through the documentation website unless you
          voluntarily provide such information through a third-party service linked from the
          website.
        </p>

        <p>
          Like most websites, our hosting and infrastructure providers may process certain technical
          information when you access the website. This may include information associated with your
          request, such as your IP address, browser type, operating system, device information,
          requested pages, referring pages, and timestamps. This information may be processed as
          part of providing, securing, and maintaining the website.
        </p>

        <h2>2. Analytics</h2>

        <p>
          We use Vercel Web Analytics to understand how the documentation website is used and to
          improve its content, usability, and performance.
        </p>

        <p>
          Vercel Web Analytics is designed to operate without cookies and does not require
          third-party tracking cookies to provide its analytics functionality.
        </p>

        <p>
          Analytics information may include aggregated information such as pages viewed, referring
          sources, geographic information at a general level, browser and operating system
          information, and other information used to understand website usage.
        </p>

        <p>
          Vercel describes its Web Analytics system as using a short-lived hash derived from
          incoming request information rather than storing a persistent cookie for visitor
          identification. Information about Vercel's handling of data is available in Vercel's
          privacy documentation.
        </p>

        <h2>3. Cookies and similar technologies</h2>

        <p>
          The {COMPANY.fullName} documentation website does not intentionally use cookies for
          advertising, behavioral tracking, or analytics.
        </p>

        <p>
          Some third-party services or infrastructure providers linked to or used by the website may
          use cookies or similar technologies independently of {COMPANY.fullName}. Their use of such
          technologies is governed by their own privacy policies and terms.
        </p>

        <h2>4. Third-party services</h2>

        <p>
          {COMPANY.fullName} may link to or interact with third-party services, including GitHub,
          npm, Vercel, and other services used to distribute, host, document, or discuss the
          library.
        </p>

        <p>
          When you follow a link to a third-party website or use a third-party service, that service
          may collect and process information according to its own policies. {COMPANY.fullName} does
          not control the privacy practices, security, or data processing practices of third-party
          services.
        </p>

        <p>
          We recommend reviewing the privacy policies of third-party services before providing them
          with personal information.
        </p>

        <h2>5. GitHub and npm</h2>

        <p>
          The {COMPANY.fullName} source code and community resources may be hosted on GitHub, and
          the package may be distributed through npm.
        </p>

        <p>
          Visiting our GitHub repository, participating in GitHub Discussions or Issues, submitting
          contributions, or interacting with npm may require you to use those services directly.
          Information you provide to those platforms is subject to their respective privacy policies
          and terms.
        </p>

        <p>
          {COMPANY.fullName} does not control or determine how GitHub or npm process information
          within their respective platforms.
        </p>

        <h2>6. User-submitted information</h2>

        <p>
          If you voluntarily submit information through a third-party service, such as a GitHub
          Issue, Discussion, pull request, or other public contribution, that information may be
          publicly visible.
        </p>

        <p>
          Do not submit sensitive personal information, passwords, authentication credentials,
          financial information, or other information that you do not want to make publicly
          available through public repositories, issues, discussions, or other community channels.
        </p>

        <h2>7. How we use information</h2>

        <p>Information that is processed in connection with the website may be used to:</p>

        <ul>
          <li>Provide and maintain the documentation website.</li>
          <li>Improve the documentation, icon library, and user experience.</li>
          <li>Understand how the website is used.</li>
          <li>Monitor website performance and reliability.</li>
          <li>Detect, prevent, and address security issues and abuse.</li>
          <li>Maintain and improve the underlying infrastructure.</li>
        </ul>

        <p>
          We do not use the documentation website to sell personal information to advertisers or
          data brokers.
        </p>

        <h2>8. Advertising</h2>

        <p>
          The {COMPANY.fullName} documentation website does not intentionally use advertising
          networks or behavioral advertising.
        </p>

        <h2>9. Data sharing</h2>

        <p>We do not sell personal information.</p>

        <p>
          Information may be processed by third-party infrastructure and service providers when
          necessary to operate, secure, analyze, or maintain the website. These providers may
          process information according to their own privacy policies and contractual obligations.
        </p>

        <p>
          Information may also be disclosed when reasonably necessary to comply with applicable law,
          respond to lawful requests, protect the rights or safety of {COMPANY.fullName} or others,
          or investigate security incidents or abuse.
        </p>

        <h2>10. Data retention</h2>

        <p>
          {COMPANY.fullName} does not intentionally maintain a personal user account database for
          visitors to the documentation website.
        </p>

        <p>
          Technical and analytics information may be retained by our infrastructure and service
          providers according to their respective retention policies and the purposes for which the
          information is processed.
        </p>

        <h2>11. Data security</h2>

        <p>
          We take reasonable measures to protect the website and the information processed through
          it. However, no website, internet transmission, or electronic storage system can be
          guaranteed to be completely secure.
        </p>

        <p>
          You should avoid submitting confidential or sensitive information through public community
          channels or other services linked from the {COMPANY.fullName} website.
        </p>

        <h2>12. Children's privacy</h2>

        <p>
          The {COMPANY.fullName} documentation website is not directed specifically toward children,
          and we do not intentionally collect personal information from children through the
          website.
        </p>

        <p>
          If you believe that a child has provided personal information to us directly, please
          contact us so that we can review the situation and take appropriate action.
        </p>

        <h2>13. International visitors</h2>

        <p>
          {COMPANY.fullName} may be accessed from countries around the world. Depending on the
          infrastructure and third-party services used to operate the website, information may be
          processed in countries other than the country from which you access the website.
        </p>

        <p>
          Different countries and jurisdictions may provide different privacy rights. Where
          applicable, those rights are subject to the requirements and limitations established by
          the laws that apply to you and to us.
        </p>

        <h2>14. Your privacy rights</h2>

        <p>
          Depending on your location and applicable law, you may have rights concerning personal
          information processed about you. These may include rights to request access to, correction
          of, deletion of, or information about the processing of your personal information.
        </p>

        <p>
          Because {COMPANY.fullName} does not operate a user account system or maintain a general
          personal-information database for documentation visitors, our ability to identify or
          retrieve information associated with a particular visitor may be limited.
        </p>

        <p>
          You may contact us if you have a privacy-related request or question. We will consider
          requests in accordance with applicable law.
        </p>

        <h2>15. External links</h2>

        <p>
          The documentation website may contain links to external websites, repositories, package
          registries, documentation, and other resources.
        </p>

        <p>
          We are not responsible for the content, security, or privacy practices of external
          websites. We encourage you to review the applicable policies of any external service you
          visit.
        </p>

        <h2>16. Changes to this privacy policy</h2>

        <p>
          We may update this privacy policy from time to time to reflect changes to the website,
          services, technologies, or applicable legal requirements.
        </p>

        <p>
          When changes are made, the "Last updated" date at the beginning of this privacy policy
          will be updated accordingly.
        </p>

        <p>
          Your continued use of the website after an updated privacy policy is published means that
          you acknowledge the updated policy to the extent permitted by applicable law.
        </p>

        <h2>17. Contact</h2>

        <p>
          If you have questions, concerns, or requests regarding this privacy policy or the privacy
          practices of {COMPANY.fullName}, please contact us through the official {COMPANY.fullName}{' '}
          repository.
        </p>

        <p>
          This privacy policy applies to the {COMPANY.fullName} documentation website and does not
          necessarily apply to third-party websites, services, or platforms that are linked from it.
        </p>
      </div>
    </section>
  )
}
