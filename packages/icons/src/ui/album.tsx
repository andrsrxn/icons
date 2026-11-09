import type { Icon } from './types'

export const IconAlbum: Icon = ({
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
      data-slot='icon-ui-album'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m17 2.65.62.01a4 4 0 0 1 3.72 3.72v6.97c0 3.77 0 5.66-1.16 6.83-1.17 1.17-3.06 1.17-6.83 1.17h-2.7c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-2.7c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17H11v7.9l3-2.32 3 2.33z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M2.65 13.35v-2.7c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h2.7c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v2.7c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.7c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
      <path
        d='M10.8 2.88v5.98c0 .93 0 1.39.28 1.52s.65-.16 1.35-.75l1.07-.89c.32-.27.48-.4.67-.4s.34.15.65.43l.75.69c.72.66 1.08.99 1.37.86s.3-.62.3-1.6V2.88'
        stroke='currentColor'
      />
    </svg>
  )
}
