import {
  IconArrowRight,
  IconChevronLeft,
  IconCreditCard,
  IconCurrencyUsd,
  IconHeart,
  IconPanelLeft,
  IconRocket,
  IconTextIndent,
} from '@andrsrxn/icons'
import { IconFlagUS } from '@andrsrxn/icons/flags'
import Link from 'next/link'
import { RTLIcon } from '@/components/shared/rtl-icon'
import { TableOfContents } from '@/components/shared/table-of-contents'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { CodeBlock } from '@/components/ui/code-block'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { COMPANY } from '@/lib/constants/company'
import { ICON_PROPS } from '@/lib/constants/icons'

// biome-ignore lint/complexity/noExcessiveLinesPerFunction: allowed
export default function DocsPage() {
  return (
    <section className='flex flex-col lg:justify-between wrapper max-w-245 lg:flex-row-reverse gap-12 py-10 animate-in fade-in duration-800 ease-in-out'>
      <div className='fixed top-0 left-0 z-100 flex w-full -translate-y-full items-center justify-center gap-2 border-b bg-card py-2 shadow-sm transition-transform duration-200 focus-within:translate-y-0'>
        <a
          href='#documentation'
          className='flex items-center gap-2 rounded-md px-3 py-1 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'>
          <span className='font-bold text-lg'>
            {COMPANY.fullName}{' '}
            <span className='font-normal text-muted-foreground text-base'>
              — Skip to main content
            </span>
          </span>
        </a>
      </div>

      <TableOfContents />
      <div className='grid gap-5 [&_p]:text-muted-foreground [&_p]:text-base [&_p]:leading-normal [&_p]:text-pretty [&_p]:max-w-prose [&_ul]:text-base [&_ul]:leading-normal [&_ul]:text-muted-foreground [&_ul]:max-w-prose [&_ul]:grid [&_ul]:gap-3 [&_strong]:text-foreground [&_strong]:font-semibold [&_h2]:font-heading [&_h4]:font-semibold [&_h2]:mt-6 [&_h2]:text-2xl [&_h3]:text-xl [&_h2]:font-semibold [&_h3]:font-semibold [&_p>code]:bg-muted [&_p>code]:py-0.5 [&_p>code]:px-1 [&_p>code]:rounded-md [&_p>code]:border [&_p>code]:text-sm [&_p>code]:text-foreground [&_li>code]:bg-muted [&_li>code]:py-0.5 [&_li>code]:px-1 [&_li>code]:rounded-md [&_li>code]:border [&_li>code]:text-sm [&_li>code]:text-foreground [&_a]:text-foreground [&_a]:font-medium [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 [&_ul]:pl-5 [&_ul]:marker:text-primary/40 [&_ul]:list-disc '>
        <Link
          href='/'
          prefetch={false}
          className='text-primary! w-fit leading-none! hover:underline! no-underline! flex items-center gap-1 decoration-1 underline-offset-2 mb-4 font-normal!'>
          <IconChevronLeft className='size-4' />
          Back to icons
        </Link>
        <h1 id='documentation' className='text-3xl md:text-4xl -mb-2 font-heading font-bold'>
          Documentation
        </h1>
        <h2 id='overview'>Overview</h2>
        <p>
          <strong>{COMPANY.fullName}</strong> is a {COMPANY.description}
        </p>
        <p>
          This library was built to serve as the icon foundation for <code>andrsrxn/ui</code>, an
          upcoming open-source, opinionated Design System and Component Library aimed at
          enterprise-grade products.
        </p>
        <p>
          While <code>andrsrxn/icons</code> is tightly coupled to that vision, it is intentionally
          published as a <strong>standalone package</strong>. This keeps it lightweight,
          independently versioned, and freely usable by anyone.
        </p>

        <h2 id='why-another-icon-library'>Why another icon library?</h2>
        <p>
          The short answer:{' '}
          <strong>there are no free duotone icon sets with the right style</strong>.
        </p>
        <p>
          Most libraries offer only outline or solid variants.{' '}
          <a href='https://phosphoricons.com/'>Phosphor Icons</a> does include free duotone
          variants, but its implementation applies a duotone layer to every icon unconditionally,
          this results in unnecessary visual noise and icons that feel semantically inconsistent.
        </p>
        <p>
          <code>andrsrxn/icons</code> takes a more deliberate approach:
        </p>
        <ul>
          <li>
            <strong>Duotone by default</strong>: Icons that have a meaningful path/fill distinction
            are always duotone.
          </li>
          <li>
            <strong>Outline when appropriate</strong>: Simple geometric icons such as <code>+</code>
            , <code>/</code>, or <code>×</code> do not receive a decorative background layer that
            would only reduce clarity.
          </li>
          <li>
            <strong>Filled on demand</strong>: A <code>filled</code> variant is included only for
            icons that have a meaningful active or selected state, such as <code>like</code>,{' '}
            <code>bookmark</code>, or <code>star</code>, not as a blanket alternative style.
          </li>
        </ul>

        <h2 id='requirements'>Requirements</h2>

        <p>
          You only need to be using <code>react</code> and <code>react-dom</code> version 19.
        </p>
        <Alert className='max-w-prose bg-amber-50 border-amber-200 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-50 text-amber-950'>
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            <p className='text-amber-900! dark:text-amber-100! text-sm!'>
              This is an ESM-only package, make sure your project is using Node <code>20.16.0</code>
              , <code>22.19.0</code>, <code>24.0.0</code> or higher, and has the{' '}
              <code>"type": "module"</code> field in your <code>package.json</code>.
            </p>
          </AlertDescription>
        </Alert>

        <h2 id='installation'>Installation</h2>
        <p>Execute the following command:</p>

        <CodeBlock
          code='pnpm add @andrsrxn/icons'
          language='bash'
          className='max-w-prose'
          filename='bash'
        />

        <p>Then add the minimal CSS to the root of your project:</p>

        <CodeBlock
          code='import "@andrsrxn/icons/styles.css"'
          language='typescript'
          className='max-w-prose'
          filename='index.tsx'
        />
        <p>
          This includes global base styles through css classes and handles RTL direction
          automatically on the mentioned icons below.
        </p>

        <h2 id='categories'>Categories</h2>

        <ul>
          <li>
            <strong>UI</strong>: 900+ functional icons for apps, each with its own preview image.
            (aspect ratio 1:1)
          </li>
          <li>
            <strong>Flags</strong>: 250+ simple and minimal country flags, named with ISO 3166-1
            alpha-2 code (<code>IconFlagUS</code>, <code>IconFlagMX</code>), the exceptions are{' '}
            <code>IconFlagLGTB</code> and continent flags, which have a <code>C</code> prefix (
            <code>IconFlagCAF</code> for Africa, <code>IconFlagCNA</code> for North America, and so
            on); treated as image assets with country code as <code>title</code> included. (aspect
            ratio 3:2)
          </li>
        </ul>

        <h2 id='usage'>Usage</h2>

        <h3 id='global-import'>Global import</h3>

        <p>Still tree-shakable, it will only import the icons you use.</p>

        <CodeBlock
          code={`import { IconRocket } from '@andrsrxn/icons'
import { IconFlagUS } from '@andrsrxn/icons/flags'

export function App() {
  return (
    <div className='flex items-center justify-center gap-2 h-dvh w-full'>
      <IconRocket />
      <IconFlagUS />
    </div>
  )
}`}
          language='tsx'
          className='max-w-prose'
        />

        <h3 id='specific-import' className='mt-4'>
          Specific import
        </h3>

        <p>
          Explicitly importing icons is also supported, giving you more granular control over
          imports.
        </p>

        <CodeBlock
          code={`import { IconRocket } from '@andrsrxn/icons/rocket'
import { IconFlagUS } from '@andrsrxn/icons/flags/us'

export function App() {
  return (
    <div className='flex items-center justify-center gap-2 h-dvh w-full'>
      <IconRocket />
      <IconFlagUS />
    </div>
  )
}`}
          language='tsx'
          className='max-w-prose'
        />

        <h2 id='rtl-support'>RTL support</h2>

        <p>
          The following UI icons automatically detect the <code>dir</code> attribute on the closest
          parent element and add the <code>transform: scaleX(-1)</code> CSS property to the SVG
          element:
        </p>

        <ul>
          <li>
            <p>
              <code>arrow-start</code>
            </p>
          </li>
          <li>
            <p>
              <code>arrow-end</code>
            </p>
          </li>
        </ul>
        <p>Try it out in the following demo:</p>

        <div className='flex items-center gap-4 md:gap-6'>
          <RTLIcon>
            <IconArrowRight />
          </RTLIcon>
          <RTLIcon>
            <IconTextIndent />
          </RTLIcon>
          <RTLIcon>
            <IconPanelLeft />
          </RTLIcon>
        </div>
        <h2 id='naming'>Naming</h2>

        <p>
          All of the categories have an <code>Icon</code> prefix to differentiate them from other
          components and be easily importable.
        </p>
        <p>
          The icon names are based on the object it represents, using kebab-case for the file names
          and PascalCase for the component names.
        </p>
        <p>
          There are some exceptions on widely accepted names, such as <code>IconSave</code> instead
          of <code>IconFloppyDisk</code> or <code>IconExternalLink</code> instead of{' '}
          <code>IconSquareArrowUpRight</code>.
        </p>

        <h2 id='styling'>Styling</h2>

        <p>All of the icons have a specific className to style them globally:</p>

        <ul>
          <li>
            <strong>UI icons</strong>: <code>ui-icon</code>
          </li>
          <li>
            <strong>Flag icons</strong>: <code>ui-flag</code>
          </li>
        </ul>
        <p>
          Also, the icons include a <code>data-slot</code> with its specific name, for example:
        </p>
        <ul>
          <li>
            <strong>rocket</strong>: <code>data-slot="ui-icon-rocket"</code>
          </li>
          <li>
            <strong>us</strong>: <code>data-slot="ui-flag-us"</code>
          </li>
        </ul>
        <p>Or you can use the custom props as the following examples.</p>

        <h3 id='size' className='mt-6'>
          Size
        </h3>

        <p>
          <strong>Note:</strong> If you want to keep proportions on Flag icons, only set the{' '}
          <code>width</code>.
        </p>

        <CodeBlock
          code={`// Set the size with size prop
<IconRocket size={80} />

// Or with className
<IconRocket className="size-6" />`}
          language='tsx'
          className='max-w-prose'
        />

        <div className='bg-card rounded-md shadow-sm border w-max'>
          <IconRocket size={80} />
        </div>

        <CodeBlock
          code={`// Keep 3:2 proportions
<IconFlagUS width={80} />
<IconFlagUS className="w-16" />`}
          language='tsx'
          className='max-w-prose mt-6'
        />

        <div className='bg-card rounded-md shadow-sm border w-max'>
          <IconFlagUS width={80} />
        </div>

        <CodeBlock
          code={`// Square proportions
<IconFlagUS size={80} />
<IconFlagUS className="size-20" />`}
          language='tsx'
          className='max-w-prose mt-6'
        />

        <div className='bg-card rounded-md shadow-sm border w-max'>
          <IconFlagUS size={80} />
        </div>

        <CodeBlock
          code={`// To fill the entire square
<IconFlagUS size={80} preserveAspectRatio="xMidYMid slice" />
<IconFlagUS className="size-20" preserveAspectRatio="xMidYMid slice" />`}
          language='tsx'
          className='max-w-prose mt-6'
        />

        <div className='bg-card rounded-md size-12 shadow-sm border '>
          <IconFlagUS className='size-20' preserveAspectRatio='xMidYMid slice' />
        </div>

        <h3 id='color' className='mt-8'>
          Color
        </h3>

        <p>
          By default, the UI icons have <code>currentColor</code> set as fill and stroke value.
        </p>

        <CodeBlock
          code={`// Use color prop
<IconRocket color='#0047CC' />

// Or use className
<IconRocket className="text-blue-500" />`}
          language='tsx'
          className='max-w-prose'
        />

        <div className='bg-card rounded-md shadow-sm border w-max'>
          <IconRocket size={80} color='#0047CC' />
        </div>
        <h3 id='stroke-width' className='mt-8'>
          Stroke width
        </h3>

        <p>
          It is not intended to change the stroke width of the icons (default <code>1.5</code>). It
          could lead to inconsistent results in too thin or too thick strokes, losing the icon
          quality.
        </p>

        <p>
          if you still need to change it, add <code>strokeWidth</code> prop to each icon.
        </p>

        <CodeBlock
          code={`// Use strokeWidth prop
<IconRocket strokeWidth={2} />

// Or use className
<IconRocket className='stroke-2' />`}
          language='tsx'
          className='max-w-prose'
        />

        <div className='bg-card rounded-md size-20 shadow-sm border '>
          <IconRocket size={80} strokeWidth={2} />
        </div>

        <h2 id='typescript'>TypeScript</h2>

        <p>We expose scoped types for each category:</p>

        <CodeBlock
          code={`import type { Icon, IconProps } from '@andrsrxn/icons/types'
import type { FlagIcon, FlagIconProps } from '@andrsrxn/icons/flags/types'`}
          language='tsx'
          className='max-w-prose'
        />

        <ul>
          <li>
            <strong>Icon</strong>, <strong>FlagIcon</strong>: SVG element
          </li>
          <li>
            <strong>IconProps</strong>, <strong>FlagIconProps</strong>: Icon component props from
            SVG and custom props
          </li>
        </ul>

        <h3 id='props' className='mt-6'>
          Props
        </h3>
        <h4 id='ui-icon-props'>UI icon props</h4>
        <Table className='shadow-sm mb-2 w-max ml-1 border-collapse overflow-hidden border rounded-lg'>
          <TableHeader>
            <TableRow>
              <TableHead>Props</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Default</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(ICON_PROPS.ui).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell className='font-medium text-primary'>{key}</TableCell>
                <TableCell>
                  <code className='text-sm text-muted-foreground bg-secondary/50 border rounded-sm px-1 py-0.5'>
                    {value.type}
                  </code>
                </TableCell>
                <TableCell>
                  <code className='text-sm text-muted-foreground bg-secondary/50 border rounded-sm px-1 py-0.5'>
                    {typeof value.default === 'function'
                      ? value.default('{{icon-name}}')
                      : value.default}
                  </code>
                </TableCell>
                <TableCell>
                  <p className='w-full text-sm! text-muted-foreground'>{value.description}</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <h4 id='flag-icon-props' className='mt-6'>
          Flag icon props
        </h4>
        <Table className='shadow-sm mb-2 w-max ml-1 border-collapse overflow-hidden border rounded-lg'>
          <TableHeader>
            <TableRow>
              <TableHead>Props</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Default</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(ICON_PROPS.flags).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell className='font-medium text-primary'>{key}</TableCell>
                <TableCell>
                  <code className='text-sm text-muted-foreground bg-secondary/50 border rounded-sm px-1 py-0.5'>
                    {value.type}
                  </code>
                </TableCell>
                <TableCell>
                  <code className='text-sm text-muted-foreground bg-secondary/50 border rounded-sm px-1 py-0.5'>
                    {typeof value.default === 'function'
                      ? value.default('{{flag-name}}')
                      : value.default}
                  </code>
                </TableCell>
                <TableCell>
                  <p className='w-full text-sm! text-muted-foreground'>{value.description}</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Alert>
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            <p className=' text-sm!'>
              Types are named this way to avoid conficts with some Icon components names, such as{' '}
              <code>IconFlag</code> from UI icons.
            </p>
          </AlertDescription>
        </Alert>

        <h2 id='contributing'>Contributing</h2>

        <p>
          We currently do not accept contributions for new icons, but we appreciate suggestions and
          icon requests through{' '}
          <a href={COMPANY.repo.issues} target='_blank' rel='noopener noreferrer'>
            GitHub issues.
          </a>
        </p>

        <h2 id='support'>Support</h2>

        <p>If this project is useful to you, consider supporting its development through:</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <Button
            nativeButton={false}
            variant='outline'
            className='no-underline!'
            render={
              <a
                href='https://github.com/sponsors/andrsrxn'
                target='_blank'
                rel='noopener noreferrer'>
                <IconHeart className='text-pink-500' /> Github sponsors
              </a>
            }
          />
          <Button
            nativeButton={false}
            variant='outline'
            className='no-underline!'
            render={
              <a
                href='https://app.recurrente.com/s/andrsrxn/pagar'
                target='_blank'
                rel='noopener noreferrer'>
                <IconCreditCard className='text-amber-600' /> Credit/Debit card
              </a>
            }
          />
          <Button
            nativeButton={false}
            variant='outline'
            className='no-underline!'
            render={
              <a href='https://paypal.me/andrsrxn' target='_blank' rel='noopener noreferrer'>
                <IconCurrencyUsd className='text-blue-600' /> PayPal
              </a>
            }
          />
        </div>

        <h2 id='inspiration'>Inspiration</h2>

        <p>
          All of the icons were made by scratch on Figma but inspired on the following icon
          libraries:
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Button
            nativeButton={false}
            variant='outline'
            className='no-underline! bg-[#C4E456] dark:text-black dark:hover:bg-[#C4E456] dark:hover:opacity-80'
            render={
              <a href='https://phosphoricons.com/' target='_blank' rel='noopener noreferrer'>
                <img src='/assets/phosphor-icons.webp' className='size-5' alt='Phosphor Icons' />
                Phosphor Icons
              </a>
            }
          />

          <Button
            nativeButton={false}
            variant='outline'
            className='no-underline! bg-[#9EE163] dark:text-black dark:hover:bg-[#9EE163] dark:hover:opacity-80'
            render={
              <a href='https://hugeicons.com/icons' target='_blank' rel='noopener noreferrer'>
                <img src='/assets/huge-icons.webp' className='size-5' alt='HugeIcons' />
                HugeIcons
              </a>
            }
          />
        </div>

        <h2 id='credits'>Credits</h2>

        <p>
          The flag icons are adapted from{' '}
          <a href='https://github.com/madebybowtie/FlagKit'>FlagKit</a> by{' '}
          <a href='https://github.com/madebybowtie'>Bowtie</a>, used under the MIT License
          (Copyright (c) 2016 Bowtie AB). Only the 3:2 rectangular flag versions were used as source
          material and converted into <code>tsx</code> components. See{' '}
          <a href='https://github.com/andrsrxn/icons/blob/main/THIRD-PARTY-LICENSES.md'>
            THIRD-PARTY-LICENSES.md
          </a>{' '}
          for the full license text.
        </p>

        <h2 id='license'>License</h2>
        <p>
          All icons are free; personal or commercial use is allowed under MIT License - Copyright
          2026 Andrés Raxón (andrsrxn).
        </p>
      </div>
    </section>
  )
}
