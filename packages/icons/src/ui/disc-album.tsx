import type { Icon } from './types'

export const IconDiscAlbum: Icon = ({
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
      data-slot='icon-ui-disc-album'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <g opacity='.2'>
        <path
          d='M12.98 2.8c3.77 0 5.65 0 6.83 1.18 1.17 1.17 1.17 3.06 1.17 6.83v2c0 3.77 0 5.66-1.17 6.83-1.18 1.17-3.06 1.17-6.83 1.17h-2c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-2c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17zM5.92 12a6.08 6.08 0 1 0 12.16 0 6.08 6.08 0 0 0-12.16 0'
          fillRule='evenodd'
          clipRule='evenodd'
          fill='currentColor'
        />
        <path
          d='M11.44 9.91a2.16 2.16 0 0 0-1.53 2.65 2.17 2.17 0 1 0 1.53-2.65'
          fill='currentColor'
        />
      </g>
      <path d='M12 5.92a6.08 6.08 0 1 1 0 12.16 6.08 6.08 0 0 1 0-12.16' stroke='currentColor' />
      <path
        d='M11.44 9.91a2.17 2.17 0 1 1 1.12 4.18 2.17 2.17 0 0 1-1.12-4.18'
        stroke='currentColor'
      />
      <path
        d='M2.98 12.8v-2c0-3.76 0-5.65 1.17-6.82s3.06-1.17 6.83-1.17h2c3.77 0 5.65 0 6.83 1.17s1.17 3.06 1.17 6.83v2c0 3.77 0 5.66-1.17 6.83-1.18 1.17-3.06 1.17-6.83 1.17h-2c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
    </svg>
  )
}
