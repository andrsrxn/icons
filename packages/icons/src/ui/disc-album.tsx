import type { Icon } from './types'

export const IconDiscAlbum: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-disc-album'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <g opacity='.2'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14.98 2.8c2.83 0 4.24 0 5.12.89.88.88.88 2.3.88 5.12v6c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88h-6c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-6c0-2.83 0-4.24.88-5.12s2.29-.88 5.12-.88zM5.92 12a6.08 6.08 0 1 0 12.16 0 6.08 6.08 0 0 0-12.16 0'
          fill='currentColor'
        />
        <path
          d='M11.44 9.91a2.16 2.16 0 0 0-1.53 2.65 2.17 2.17 0 1 0 1.53-2.65'
          fill='currentColor'
        />
      </g>
      <path d='M12 5.92A6.06 6.06 0 0 0 5.92 12 6.08 6.08 0 1 0 12 5.92' stroke='currentColor' />
      <path
        d='M11.44 9.91a2.16 2.16 0 0 0-1.53 2.65 2.17 2.17 0 1 0 1.53-2.65'
        stroke='currentColor'
      />
      <rect
        width='18'
        height='18'
        rx='3'
        transform='matrix(0 -1 -1 0 20.98 20.8)'
        stroke='currentColor'
      />
    </svg>
  )
}
