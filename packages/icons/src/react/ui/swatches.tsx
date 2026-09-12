import type { Icon } from './types'

export const IconSwatches: Icon = ({
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
      data-slot='icon-ui-swatches'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M10.1 9.6c0-.41 0-.62.09-.8.07-.2.22-.34.51-.63l2.4-2.35c.66-.66 1-.99 1.4-.99.42 0 .75.34 1.41 1l2.27 2.27c.67.67 1 1 1 1.41 0 .42-.33.75-1 1.42l-4.66 4.65c-1.45 1.45-2.18 2.18-2.8 1.92-.61-.25-.61-1.28-.61-3.33z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M13.97 14.91c.3-.32.44-.49.63-.58s.4-.09.84-.1l3.7-.05c.95-.01 1.43-.02 1.72.28.3.29.3.77.3 1.72v3.17c0 .95 0 1.42-.3 1.71-.28.3-.76.3-1.7.3h-6.45c-1.92 0-2.87 0-3.14-.6-.26-.59.37-1.3 1.64-2.73z'
        fill='currentColor'
      />
      <path
        d='M6.57 21.2a3.74 3.74 0 0 1-3.74-3.74V5.78c0-1.42 0-2.12.44-2.56s1.14-.44 2.56-.44h1.49c1.41 0 2.12 0 2.56.44s.44 1.14.44 2.56v11.68a3.74 3.74 0 0 1-3.75 3.75'
        stroke='currentColor'
      />
      <path
        d='m10.54 8.02 1.81-1.81c1-1 1.5-1.5 2.12-1.5s1.12.5 2.12 1.5l1.05 1.05c1 1 1.5 1.5 1.5 2.12s-.5 1.12-1.5 2.12l-7.78 7.8'
        stroke='currentColor'
      />
      <path
        d='M15.7 13.72h2.56c1.41 0 2.12 0 2.56.44s.44 1.14.44 2.56v1.49c0 1.41 0 2.12-.44 2.56s-1.15.44-2.56.44H6.75'
        stroke='currentColor'
      />
      <path
        d='M7.13 17.19a.56.56 0 1 1-1.13 0 .56.56 0 0 1 1.13 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
