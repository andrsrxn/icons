import type { Icon } from './types'

export const IconDiplomaCheckBadge: Icon = ({
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
      data-slot='icon-ui-diploma-check-badge'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.3 17.39c2.82 0 4.24 0 5.11-.88s.88-2.3.88-5.12V8.98c0-2.83 0-4.25-.88-5.12-.87-.88-2.29-.88-5.12-.88H7.71c-2.83 0-4.25 0-5.12.88-.88.87-.88 2.29-.88 5.12v2.4c0 2.84 0 4.25.88 5.13.87.88 2.29.88 5.12.88h.2A4.2 4.2 0 0 1 12 12.38c.38 0 .97.11.97.11s1.47.59 2.01 1.14c.3.3.76 1.04.76 1.04l.35 2.72z'
        fill='currentColor'
      />
      <path d='M9 6.27h6' stroke='currentColor' />
      <path d='M6.72 9.32h10.56' stroke='currentColor' />
      <path
        d='M5.2 17.39c-.46 0-.69 0-.88-.03a3 3 0 0 1-2.59-2.58c-.02-.2-.02-.43-.02-.89V8.98c0-2.83 0-4.25.88-5.12.87-.88 2.29-.88 5.12-.88h8.58c2.83 0 4.25 0 5.12.88.88.87.88 2.29.88 5.12V14l-.01.7a3 3 0 0 1-2.68 2.67c-.15.02-.34.02-.7.02'
        stroke='currentColor'
      />
      <path
        d='m10.44 17.24.23.28c.36.44.54.66.77.66.24 0 .42-.22.78-.67l1.34-1.65'
        stroke='currentColor'
      />
      <path
        d='M16.17 16.85A4.16 4.16 0 0 0 12 12.68a4.17 4.17 0 1 0 4.17 4.17'
        stroke='currentColor'
      />
    </svg>
  )
}
