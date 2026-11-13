import type { Icon } from './types'

export const IconFileCloud: Icon = ({
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
      data-slot='icon-ui-file-cloud'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.78 22.26c-3.77 0-5.65 0-6.82-1.17-1.18-1.17-1.18-3.05-1.18-6.83v-4.5c0-3.74 0-5.61 1.16-6.78S7.97 1.8 11.7 1.75l1.7-.01v6.8h6.78v8.73h-.98l-1.01-1.93h-3.84l-.95 1.56-2.71 1.3v2.38l1.29 1.68z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M20.18 12.3v-1.18c0-1.66 0-2.5-.32-3.24-.31-.75-.9-1.33-2.1-2.49l-.58-.56-.84-.84c-.97-.97-1.45-1.45-2.05-1.75l-.47-.19c-.62-.21-1.3-.21-2.68-.21-3.15 0-4.72 0-5.8.83a4 4 0 0 0-.72.72c-.84 1.08-.84 2.65-.84 5.8v9.23a3.84 3.84 0 0 0 3.84 3.84'
        stroke='currentColor'
      />
      <path
        d='M12.98 22.25c-.66 0-1.3-.3-1.75-.78q-.68-.73-.7-1.81c0-1.43 1.1-2.6 2.45-2.6.8 0 1.51.41 1.96 1.04'
        stroke='currentColor'
      />
      <path d='M20.39 22.25h-7.5' stroke='currentColor' />
      <path d='M13.27 17.07a2.96 2.96 0 0 1 5.43-.69c.49.84.47 1.7.36 2.26' stroke='currentColor' />
      <path
        d='M19.14 17.57a2 2 0 0 1 1.96.07c1.2.68 1.6 2.2.91 3.4-.4.7-.96 1.13-1.53 1.2'
        stroke='currentColor'
      />
      <path
        d='M13.2 2.35v2.46c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.46'
        stroke='currentColor'
      />
    </svg>
  )
}
