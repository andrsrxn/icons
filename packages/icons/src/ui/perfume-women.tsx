import type { Icon } from './types'

export const IconPerfumeWomen: Icon = ({
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
      data-slot='icon-ui-perfume-women'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M5.18 19.52a3 3 0 0 0 2.96 2.6h8.69c1.5 0 2.77-1.11 2.95-2.6l.2-1.55a7.56 7.56 0 1 0-15 0z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M7.33 22.27h10.61a2 2 0 0 0 1.84-1.65l.04-.28.27-2.37A7.64 7.64 0 1 0 4.9 18l.27 2.36.03.27a2 2 0 0 0 1.85 1.65z'
        stroke='currentColor'
      />
      <path
        d='M9.2 10.13V8.36c0-.95 0-1.42.3-1.71s.77-.3 1.7-.3h2.57c.94 0 1.41 0 1.7.3s.3.76.3 1.7v1.78'
        stroke='currentColor'
      />
      <path
        d='M10.88 6.36V3.52c0-.57 0-.86.11-1.07a1 1 0 0 1 .43-.43c.21-.11.5-.11 1.07-.11s.85 0 1.07.11a1 1 0 0 1 .43.43c.1.21.1.5.1 1.07v2.84'
        stroke='currentColor'
      />
      <circle opacity='.2' cx='4.91' cy='3.7' r='1.97' fill='currentColor' />
      <circle cx='4.91' cy='3.7' r='1.97' stroke='currentColor' />
      <path d='M6.88 3.7h4' stroke='currentColor' />
      <path d='M14.1 3.7h3.34' stroke='currentColor' />
      <path
        opacity='.2'
        d='M12.49 6.36c.57 0 .85 0 1.07-.12a1 1 0 0 0 .43-.42c.1-.22.1-.5.1-1.07V3.52c0-.57 0-.86-.1-1.07a1 1 0 0 0-.43-.43c-.22-.11-.5-.11-1.07-.11s-.86 0-1.07.11a1 1 0 0 0-.43.43c-.11.21-.11.5-.11 1.07v1.23c0 .57 0 .85.11 1.07a1 1 0 0 0 .43.42c.21.12.5.12 1.07.12'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
