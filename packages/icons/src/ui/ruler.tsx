import type { Icon } from './types'

export const IconRuler: Icon = ({
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
      data-slot='icon-ui-ruler'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M5.27 20.17c1.33 1.33 2 2 2.83 2s1.5-.67 2.83-2l9.24-9.24c1.33-1.34 2-2 2-2.83s-.67-1.5-2-2.83l-1.44-1.44c-1.33-1.33-2-2-2.83-2s-1.5.67-2.83 2l-9.24 9.24c-1.33 1.34-2 2-2 2.83s.67 1.5 2 2.83z'
        fill='currentColor'
      />
      <path
        d='m4.55 12.35 7.8-7.8c1.34-1.34 2-2 2.79-2.2a3 3 0 0 1 1.52 0c.79.2 1.46.86 2.8 2.2v0c1.33 1.33 2 2 2.2 2.79a3 3 0 0 1 0 1.52c-.2.79-.87 1.45-2.2 2.79l-7.81 7.8c-1.34 1.34-2 2-2.79 2.2a3 3 0 0 1-1.52 0c-.79-.2-1.46-.86-2.8-2.2v0c-1.33-1.33-2-2-2.2-2.79a3 3 0 0 1 0-1.52c.2-.79.87-1.45 2.2-2.79'
        stroke='currentColor'
      />
      <path d='m8.73 8.27 2.83 2.82' stroke='currentColor' />
      <path d='m5.22 11.68 2.87 2.88' stroke='currentColor' />
      <path d='m12.15 4.75 2.88 2.87' stroke='currentColor' />
    </svg>
  )
}
