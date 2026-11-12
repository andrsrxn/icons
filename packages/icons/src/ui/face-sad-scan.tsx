import type { Icon } from './types'

export const IconFaceSadScan: Icon = ({
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
      data-slot='icon-ui-face-sad-scan'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M9.5 2.51c-3.3 0-4.95 0-5.97 1.03C2.5 4.56 2.5 6.2 2.5 9.5v4.98c0 3.3 0 4.95 1.03 5.97C4.55 21.5 6.2 21.5 9.5 21.5h4.98c3.3 0 4.95 0 5.98-1.03 1.02-1.02 1.02-2.67 1.02-5.97v-5c0-3.3 0-4.95-1.02-5.97-1.03-1.03-2.68-1.03-5.98-1.03z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M15.99 21.45c1.86 0 2.78 0 3.5-.34a3.5 3.5 0 0 0 1.65-1.64c.34-.72.34-1.65.34-3.51'
        stroke='currentColor'
      />
      <path
        d='M16.02 2.58c1.83 0 2.74 0 3.45.33a3.5 3.5 0 0 1 1.68 1.68c.33.7.33 1.62.33 3.45'
        stroke='currentColor'
      />
      <path
        d='M8.02 21.45c-1.86 0-2.8 0-3.51-.34a3.5 3.5 0 0 1-1.65-1.64c-.34-.72-.34-1.65-.34-3.52'
        stroke='currentColor'
      />
      <path
        d='M8.02 2.58c-1.86 0-2.8 0-3.51.34a3.5 3.5 0 0 0-1.65 1.65c-.34.71-.34 1.65-.34 3.51'
        stroke='currentColor'
      />
      <path
        d='M9.53 9.25a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16.07 9.25a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16.07 15.96c-.9-.9-2.32-1.45-4.17-1.45a6.3 6.3 0 0 0-4.17 1.45'
        stroke='currentColor'
      />
    </svg>
  )
}
