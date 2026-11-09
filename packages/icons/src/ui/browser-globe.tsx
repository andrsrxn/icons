import type { Icon } from './types'

export const IconBrowserGlobe: Icon = ({
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
      data-slot='icon-ui-browser-globe'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.97 6.32c0-2.1 1.69-3.78 3.78-3.78h12.48A3.8 3.8 0 0 1 22 6.32c0 .52-.43.94-.95.94H2.91a.94.94 0 0 1-.94-.94'
        fill='currentColor'
      />
      <path
        d='M7.67 18.15c-1.59 0-2.38 0-3.01-.22a4 4 0 0 1-2.47-2.47c-.22-.63-.22-1.42-.22-3v-2.12c0-3.58 0-5.37 1.06-6.52l.22-.22C4.4 2.54 6.19 2.54 9.77 2.54h5.46c2.6 0 3.9 0 4.85.58a4 4 0 0 1 1.35 1.34c.58.96.58 2.26.58 4.85'
        stroke='currentColor'
      />
      <path d='M21.81 7.26H2.16' stroke='currentColor' />
      <circle opacity='.2' cx='16.55' cy='16.53' r='5.73' fill='currentColor' />
      <circle cx='16.55' cy='16.53' r='5.73' stroke='currentColor' />
      <ellipse cx='16.55' cy='16.53' rx='1.9' ry='5.73' stroke='currentColor' />
      <path d='M10.82 16.53h11.45' stroke='currentColor' />
    </svg>
  )
}
