import type { Icon } from './types'

export const IconPlaySquare: Icon = ({
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
      data-slot='icon-ui-play-square'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.4 2.6c3.76 0 5.65 0 6.82 1.18 1.17 1.17 1.17 3.06 1.17 6.83v2.78c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.78c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-2.78c0-3.77 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17zm-2.44 4.62c-.57-.34-.86-.5-1.17-.48s-.57.23-1.1.64l-.27.22c-.39.31-.58.47-.68.69s-.09.46-.07.96l.26 5.91c.03.65.04.98.22 1.22.18.25.49.36 1.1.58.45.16.67.24.9.22s.42-.15.82-.39l5.06-3.08c.57-.34.86-.52.99-.8.12-.29.06-.62-.06-1.27l-.02-.08a2 2 0 0 0-.24-.84c-.13-.18-.32-.29-.7-.52z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M2.6 13.4v-2.8c0-3.76 0-5.65 1.18-6.82 1.17-1.17 3.06-1.17 6.83-1.17h2.78c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v2.78c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17h-2.78c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
      <path
        d='M13.75 15.35c-2.6 1.6-3.9 2.4-4.9 1.88l-.12-.07c-.96-.59-.96-2.11-.96-5.16s0-4.57.96-5.16l.12-.07c1-.51 2.3.28 4.9 1.88 2.41 1.47 3.61 2.2 3.65 3.28v.14c-.04 1.07-1.24 1.81-3.65 3.28'
        stroke='currentColor'
      />
    </svg>
  )
}
