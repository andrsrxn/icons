import {
  IconArrowStart,
  IconChevronLeft,
  IconCreditCard,
  IconCurrencyUsd,
  IconHeart,
  IconInfo,
  IconListCheckRtl,
  IconListOrderedRtl,
  IconNotes,
  IconRocket,
  IconSeekBackwardRtl,
  IconSeekForwardRtl,
  IconTextIndent,
  IconWarningTriangle,
} from '@andrsrxn/icons'
import { IconFlagGT } from '@andrsrxn/icons/flags'
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
      <div className='grid gap-5 [&_p]:text-muted-foreground [&_p]:text-base [&_p]:leading-normal [&_p]:text-pretty [&_p]:max-w-prose [&_ul]:text-base [&_ul]:leading-normal [&_ul]:text-muted-foreground [&_ul]:max-w-prose [&_ul]:grid [&_ul]:gap-3 [&_strong]:text-foreground [&_strong]:font-semibold [&_h2]:font-heading [&_h4]:font-semibold [&_h2]:mt-6 [&_h2]:lg:mt-8 [&_h2]:text-2xl [&_h3]:text-xl [&_h3]:mt-6 [&_h2]:font-semibold [&_h3]:font-semibold [&_p>code]:bg-muted [&_p>code]:py-0.5 [&_p>code]:px-1 [&_p>code]:rounded-md [&_p>code]:border [&_p>code]:text-sm [&_p>code]:text-foreground [&_li>code]:bg-muted [&_li>code]:py-0.5 [&_li>code]:px-1 [&_li>code]:rounded-md [&_li>code]:border [&_li>code]:text-sm [&_li>code]:text-foreground [&_a]:text-foreground [&_a]:font-medium [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 [&_ul]:pl-5 [&_ul]:marker:text-primary/40 [&_ul]:list-disc '>
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

        <h2 id='categories'>Categories</h2>

        <ul>
          <li>
            <strong>UI</strong>: Functional icons for apps, each with its own preview image. (aspect
            ratio 1:1)
          </li>
          <li>
            <strong>Flags</strong>: Simple and minimal country flags, named with ISO 3166-1 alpha-2
            code (<code>IconFlagGT</code>, <code>IconFlagUS</code>), the exceptions are{' '}
            <code>IconFlagLGTB</code> and continent flags, which have a <code>C</code> prefix (
            <code>IconFlagCAF</code> for Africa, <code>IconFlagCNA</code> for North America, and so
            on); treated as image assets with country code as <code>title</code> included. (aspect
            ratio 3:2)
          </li>
        </ul>
        <Alert className='max-w-prose'>
          <IconInfo />
          <AlertTitle>Notice</AlertTitle>
          <AlertDescription>
            <p className=' text-sm!'>
              We do not provide any <code>brand</code> or <code>logo</code> icons, as we are purely
              an icon library. If you need such icons, we recommend checking out{' '}
              <a href='https://svgl.app' rel='noopener noreferrer' target='_blank'>
                SVGL
              </a>{' '}
              or{' '}
              <a href='https://simpleicons.org/' rel='noopener noreferrer' target='_blank'>
                Simple Icons
              </a>
              .
            </p>
          </AlertDescription>
        </Alert>

        <h2 id='requirements'>Requirements</h2>

        <p>
          You only need to be using <code>react</code> and <code>react-dom</code> version 19.
        </p>
        <Alert className='max-w-prose bg-amber-50 border-amber-300 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-50 text-amber-950'>
          <IconWarningTriangle />
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
        <Tabs defaultValue='pnpm'>
          <TabsList variant='line'>
            <TabsTrigger value='pnpm'>pnpm</TabsTrigger>
            <TabsTrigger value='npm'>npm</TabsTrigger>
            <TabsTrigger value='yarn'>yarn</TabsTrigger>
            <TabsTrigger value='bun'>bun</TabsTrigger>
          </TabsList>

          <TabsContent value='pnpm'>
            <CodeBlock
              code='pnpm add @andrsrxn/icons'
              language='bash'
              className='max-w-prose'
              filename='bash'
            />
          </TabsContent>
          <TabsContent value='npm'>
            <CodeBlock
              code='npm install @andrsrxn/icons'
              language='bash'
              className='max-w-prose'
              filename='bash'
            />
          </TabsContent>
          <TabsContent value='yarn'>
            <CodeBlock
              code='yarn add @andrsrxn/icons'
              language='bash'
              className='max-w-prose'
              filename='bash'
            />
          </TabsContent>
          <TabsContent value='bun'>
            <CodeBlock
              code='bun add @andrsrxn/icons'
              language='bash'
              className='max-w-prose'
              filename='bash'
            />
          </TabsContent>
        </Tabs>

        <h2 id='usage'>Usage</h2>

        <h3 id='global-import'>Global import</h3>

        <p>Still tree-shakable, it will only import the icons you use.</p>

        <CodeBlock
          code={`import { IconRocket } from '@andrsrxn/icons'
import { IconFlagGT } from '@andrsrxn/icons/flags'

export function App() {
  return (
    <div className='flex items-center justify-center gap-2 h-dvh w-full'>
      <IconRocket />
      <IconFlagGT />
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
import { IconFlagGT } from '@andrsrxn/icons/flags/us'

export function App() {
  return (
    <div className='flex items-center justify-center gap-2 h-dvh w-full'>
      <IconRocket />
      <IconFlagGT />
    </div>
  )
}`}
          language='tsx'
          className='max-w-prose'
        />
        <Alert className='max-w-prose bg-blue-50 border-blue-300 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-50 text-blue-950'>
          <IconInfo />
          <AlertTitle>Best practices</AlertTitle>
          <AlertDescription>
            <p className='text-blue-900! dark:text-blue-100! text-sm!'>
              Avoid importing all the icons at once from the root of the library, that is not
              tree-shakable and will increase the bundle size of your application.
            </p>
          </AlertDescription>
        </Alert>

        <h2 id='rtl-support'>RTL support</h2>
        <p>
          To automatically handle icon rotation on RTL import the following CSS in the root of your
          project:
        </p>
        <CodeBlock
          code="import '@andrsrxn/icons/rtl.css'"
          language='typescript'
          className='max-w-prose'
          filename='index.tsx'
        />
        <p>
          The following UI icons automatically detect the <code>dir</code> attribute on the closest
          parent element and get flippled using the <code>transform: scaleX(-1)</code> CSS property:
        </p>
        <h3 id='opt-in-icons'>Opt-in icons</h3>
        <ul className='grid grid-cols-2 lg:grid-cols-3'>
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
          <li>
            <p>
              <code>arrow-down-start</code>
            </p>
          </li>
          <li>
            <p>
              <code>arrow-down-end</code>
            </p>
          </li>
          <li>
            <p>
              <code>arrow-up-start</code>
            </p>
          </li>
          <li>
            <p>
              <code>arrow-up-end</code>
            </p>
          </li>
          <li>
            <p>
              <code>arrows-start-end</code>
            </p>
          </li>
          <li>
            <p>
              <code>border-end</code>
            </p>
          </li>
          <li>
            <p>
              <code>border-start</code>
            </p>
          </li>
          <li>
            <p>
              <code>bounce-end</code>
            </p>
          </li>
          <li>
            <p>
              <code>bounce-start</code>
            </p>
          </li>
          <li>
            <p>
              <code>chevron-start</code>
            </p>
          </li>
          <li>
            <p>
              <code>chevron-end</code>
            </p>
          </li>
          <li>
            <p>
              <code>chevron-start-double</code>
            </p>
          </li>
          <li>
            <p>
              <code>chevron-end-double</code>
            </p>
          </li>
          <li>
            <p>
              <code>text-align-start</code>
            </p>
          </li>
          <li>
            <p>
              <code>text-align-end</code>
            </p>
          </li>
          <li>
            <p>
              <code>text-centerline-end</code>
            </p>
          </li>
          <li>
            <p>
              <code>text-centerline-start</code>
            </p>
          </li>
          <li>
            <p>
              <code>text-firstline-start</code>
            </p>
          </li>
          <li>
            <p>
              <code>text-firstline-start</code>
            </p>
          </li>
          <li>
            <p>
              <code>panel-end-filled</code>
            </p>
          </li>
          <li>
            <p>
              <code>panel-end-open-filled</code>
            </p>
          </li>
          <li>
            <p>
              <code>panel-end-open</code>
            </p>
          </li>
          <li>
            <p>
              <code>panel-end</code>
            </p>
          </li>
          <li>
            <p>
              <code>panel-start-filled</code>
            </p>
          </li>
          <li>
            <p>
              <code>panel-start-open-filled</code>
            </p>
          </li>
          <li>
            <p>
              <code>panel-start-open</code>
            </p>
          </li>
          <li>
            <p>
              <code>panel-start</code>
            </p>
          </li>
          <li>
            <p>
              <code>slides-start</code>
            </p>
          </li>
          <li>
            <p>
              <code>slides-end</code>
            </p>
          </li>
          <li>
            <p>
              <code>list-asterisk</code>
            </p>
          </li>
          <li>
            <p>
              <code>list-unordered</code>
            </p>
          </li>
        </ul>
        <h3 className='mt-3' id='opt-out-icons'>
          Opt-out icons
        </h3>
        <ul className='grid mb-3 grid-cols-2 lg:grid-cols-3'>
          <li>
            <p>
              <code>logs</code>
            </p>
          </li>
          <li>
            <p>
              <code>app-window</code>
            </p>
          </li>
          <li>
            <p>
              <code>notes</code>
            </p>
          </li>
          <li>
            <p>
              <code>article</code>
            </p>
          </li>
          <li>
            <p>
              <code>receipt</code>
            </p>
          </li>
          <li>
            <p>
              <code>text-indent</code>
            </p>
          </li>
          <li>
            <p>
              <code>text-outdent</code>
            </p>
          </li>
          <li>
            <p>
              <code>text-initial</code>
            </p>
          </li>
          <li>
            <p>
              <code>text-items</code>
            </p>
          </li>
          <li>
            <p>
              <code>text-line-height</code>
            </p>
          </li>
          <li>
            <p>
              <code>key-backspace</code>
            </p>
          </li>
          <li>
            <p>
              <code>key-enter</code>
            </p>
          </li>
          <li>
            <p>
              <code>key-tab</code>
            </p>
          </li>
          <li>
            <p>
              <code>external-link</code>
            </p>
          </li>
          <li>
            <p>
              <code>redo</code>
            </p>
          </li>
          <li>
            <p>
              <code>undo</code>
            </p>
          </li>
          <li>
            <p>
              <code>chevron-first</code>
            </p>
          </li>
          <li>
            <p>
              <code>skip-backward</code>
            </p>
          </li>
          <li>
            <p>
              <code>chevron-last</code>
            </p>
          </li>
          <li>
            <p>
              <code>skip-forward</code>
            </p>
          </li>
        </ul>
        <p>
          To opt-out of RTL on these icons and keep them as they are, add the Tailwind directive{' '}
          <code>rtl:scale-x-100</code> or the quivalent in CSS:
        </p>

        <CodeBlock
          code={`[dir=rtl] [data-slot='icon-ui-arrow-start'] {
  transform: scaleX(1);
}`}
          language='css'
          className='max-w-prose'
        />

        <p>Try it out in the following demo:</p>

        <div className='flex items-center gap-4 md:gap-6'>
          <RTLIcon>
            <IconArrowStart />
          </RTLIcon>
          <RTLIcon>
            <IconTextIndent />
          </RTLIcon>
          <RTLIcon>
            <IconNotes />
          </RTLIcon>
        </div>
        <h3>Exceptions</h3>
        <p>These icons are exclusive for RTL, as they cannot be just flipped, but adapted:</p>
        <ul className='grid mb-3 grid-cols-2 lg:grid-cols-3'>
          <li>
            <p>
              <code>list-check-rtl</code>
            </p>
          </li>
          <li>
            <p>
              <code>list-ordered-rtl</code>
            </p>
          </li>
          <li>
            <p>
              <code>seek-backwards-rtl</code>
            </p>
          </li>
          <li>
            <p>
              <code>seek-forward-rtl</code>
            </p>
          </li>
        </ul>
        <div className='flex items-center gap-4 md:gap-6'>
          <div
            className={
              'flex size-25 md:size-36 items-center justify-center bg-card bg-contain border rounded-lg bg-center bg-no-repeat [&>svg]:size-25 md:[&>svg]:size-36'
            }>
            <IconListOrderedRtl />
          </div>
          <div
            className={
              'flex size-25 md:size-36 items-center justify-center bg-card bg-contain border rounded-lg bg-center bg-no-repeat [&>svg]:size-25 md:[&>svg]:size-36'
            }>
            <IconListCheckRtl />
          </div>
          <div
            className={
              'flex size-25 md:size-36 items-center justify-center bg-card bg-contain border rounded-lg bg-center bg-no-repeat [&>svg]:size-25 md:[&>svg]:size-36'
            }>
            <IconSeekBackwardRtl />
          </div>
          <div
            className={
              'flex size-25 md:size-36 items-center justify-center bg-card bg-contain border rounded-lg bg-center bg-no-repeat [&>svg]:size-25 md:[&>svg]:size-36'
            }>
            <IconSeekForwardRtl />
          </div>
        </div>
        <h2>Accessibility</h2>
        <p>
          The UI icons are treated as <strong>decorative</strong> by default, using the{' '}
          <code>aria-hidden='true'</code> attribute.
        </p>
        <p>
          If you want to use an icon as <strong>informative</strong>, you can add an{' '}
          <code>aria-label</code>, it automatically adds the <code>role='img'</code> and set the{' '}
          <code>aria-hidden='false'</code>:
        </p>
        <CodeBlock
          code={`<IconArrowStart aria-label='Back' onClick={() => back()} />`}
          language='tsx'
          className='max-w-prose'
        />
        <Alert className='max-w-prose bg-blue-50 border-blue-300 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-50 text-blue-950'>
          <IconInfo />
          <AlertTitle>Best practices</AlertTitle>
          <AlertDescription>
            <p className='text-blue-900! dark:text-blue-100! text-sm!'>
              This is not a reccomended pattern, use it only when strictly required.
            </p>
          </AlertDescription>
        </Alert>
        <p>
          On the other hand, Flag icons are treated as <strong>informative</strong> by default. They
          use the <code>role='img'</code> and <code>aria-label</code> with its flag name in
          uppercase.
        </p>
        <p>
          If you want to treat them as <strong>decorative</strong>, use the <code>aria-hidden</code>{' '}
          attribute:
        </p>
        <CodeBlock code={'<IconFlagUs aria-hidden />'} language='tsx' className='max-w-prose' />

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
          There are some exceptions on widely known names, such as <code>IconSave</code> instead of{' '}
          <code>IconFloppyDisk</code> or <code>IconSearch</code> instead of{' '}
          <code>IconMagnifyingGlass</code>.
        </p>

        <h2 id='styling'>Styling</h2>

        <p>All of the icons have a specific className to style them globally:</p>

        <ul>
          <li>
            <strong>UI</strong>: <code>{ICON_PROPS.ui.className.default}</code>
          </li>
          <li>
            <strong>Flags</strong>: <code>{ICON_PROPS.flags.className.default}</code>
          </li>
        </ul>
        <CodeBlock
          code={`/* Apply styles to all icons */
.icon-ui {
  stroke-width: 2px;
}
`}
          language='css'
          className='max-w-prose'
        />
        <CodeBlock
          code={`/* Recommended global styles */
.icon-ui {
  flex-shrink: 0;
  pointer-events: none;
}
`}
          language='css'
          className='max-w-prose'
        />
        <p>
          Also, the icons include a <code>data-slot</code> with its specific name, for example:
        </p>
        <ul>
          <li>
            <strong>rocket</strong>:{' '}
            <code>data-slot='{ICON_PROPS.ui.className.default}-rocket'</code>
          </li>
          <li>
            <strong>us</strong>: <code>data-slot='{ICON_PROPS.flags.className.default}-us'</code>
          </li>
        </ul>
        <CodeBlock
          code={`/* Target a specific icon */
[data-slot='icon-ui-rocket'] {
  color: #f00;
  stroke-width: 1px;
}
`}
          language='css'
          className='max-w-prose'
        />

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
<IconRocket className='size-6' />`}
          language='tsx'
          className='max-w-prose'
        />

        <div className='bg-card rounded-md shadow-sm border w-max'>
          <IconRocket size={80} />
        </div>

        <CodeBlock
          code={`// Keep 3:2 proportions
<IconFlagGT width={80} />
<IconFlagGT className='w-16' />`}
          language='tsx'
          className='max-w-prose mt-6'
        />

        <div className='bg-card rounded-md shadow-sm border w-max'>
          <IconFlagGT width={80} />
        </div>

        <CodeBlock
          code={`// Square proportions
<IconFlagGT size={80} />
<IconFlagGT className='size-20' />`}
          language='tsx'
          className='max-w-prose mt-6'
        />

        <div className='bg-card rounded-md shadow-sm border w-max'>
          <IconFlagGT size={80} />
        </div>

        <CodeBlock
          code={`// To fill the entire square
<IconFlagGT size={80} preserveAspectRatio='xMidYMid slice' />
<IconFlagGT className='size-20' preserveAspectRatio='xMidYMid slice' />`}
          language='tsx'
          className='max-w-prose mt-6'
        />

        <div className='bg-card rounded-md size-20 shadow-sm border '>
          <IconFlagGT className='size-20' preserveAspectRatio='xMidYMid slice' />
        </div>

        <h3 id='color'>Color</h3>

        <p>
          By default, the UI icons have <code>currentColor</code> set as fill and stroke value.
        </p>

        <CodeBlock
          code={`// Use color prop
<IconRocket color='#0047CC' />

// Or use className
<IconRocket className='text-blue-500' />`}
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

        <p>if you still need to change it, you can do it this way:</p>

        <CodeBlock
          code={`// Use strokeWidth prop
<IconRocket strokeWidth={2} />

// Or use className
<IconRocket className='stroke-2' />`}
          language='tsx'
          className='max-w-prose'
        />

        <div className='bg-card rounded-md size-20 shadow-sm border '>
          <IconRocket size={80} className='stroke-2' />
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
        <Alert className='max-w-prose'>
          <IconInfo />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            <p className=' text-sm!'>
              Types are named this way to avoid conficts with some Icon components names, such as{' '}
              <code>IconFlag</code> from UI icons.
            </p>
          </AlertDescription>
        </Alert>

        <h3 id='props' className='mt-6'>
          Props
        </h3>
        <h4 id='icon-ui-props'>UI icon props</h4>
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
        <h4 id='icon-flag-props' className='mt-6'>
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
            className='no-underline!'
            render={
              <a href='https://phosphoricons.com/' target='_blank' rel='noopener noreferrer'>
                <img
                  src='/assets/phosphor-icons.webp'
                  className='size-5 rounded-full'
                  alt='Phosphor Icons'
                />
                Phosphor Icons
              </a>
            }
          />

          <Button
            nativeButton={false}
            variant='outline'
            className='no-underline!'
            render={
              <a href='https://hugeicons.com/icons' target='_blank' rel='noopener noreferrer'>
                <img
                  src='/assets/huge-icons.webp'
                  className='size-5 rounded-full'
                  alt='HugeIcons'
                />
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
