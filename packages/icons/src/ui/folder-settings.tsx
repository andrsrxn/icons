import type { Icon } from './types'

export const IconFolderSettings: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-folder-settings'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m16.54 14.12-1.56 3.04 1.56 3.1h-6.9c-3.78 0-5.66 0-6.83-1.17-1.18-1.17-1.18-3.06-1.18-6.83V7.44A3.73 3.73 0 0 1 5.37 3.7h.8c1 0 1.5 0 1.98.12a4 4 0 0 1 .82.3c.44.22.82.54 1.58 1.2.77.64 1.15.97 1.59 1.19a4 4 0 0 0 .82.3c.47.12.97.12 1.98.12h.16c3.01 0 4.52 0 5.57.77a4 4 0 0 1 .87.87c.77 1.05.77 2.56.77 5.57v3.02a3.3 3.3 0 0 1-1.79-1.58l-.67-1.3z'
        fill='currentColor'
      />
      <path
        d='M11.28 20.26H9.63c-3.77 0-5.65 0-6.82-1.17-1.18-1.17-1.18-3.06-1.18-6.83V6.42a2.6 2.6 0 0 1 2.59-2.59h2.21c.67 0 1 0 1.32.05a4 4 0 0 1 1.57.62c.27.18.52.4 1 .86.5.46.74.68 1 .86a4 4 0 0 0 1.58.62c.32.05.66.05 1.32.05h4.83c1.8 0 3.26 1.46 3.26 3.26'
        stroke='currentColor'
      />
      <circle cx='18.14' cy='17.05' r='2.98' stroke='currentColor' />
      <path d='m16.56 19.83-.72 1.18' stroke='currentColor' />
      <path d='m16.43 14.07-.57-1' stroke='currentColor' />
      <path d='m19.84 20.06.56 1' stroke='currentColor' />
      <path d='m19.68 14.35.77-1.27' stroke='currentColor' />
      <path d='m21.14 17.05 1.6-.02' stroke='currentColor' />
      <path d='M13.56 17.06h1.4' stroke='currentColor' />
    </svg>
  )
}
