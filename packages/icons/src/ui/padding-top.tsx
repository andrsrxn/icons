import type { Icon } from './types'

export const IconPaddingTop: Icon = ({
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
      data-slot='icon-ui-padding-top'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.62 7.05h18.75l-.01-.76a4 4 0 0 0-3.65-3.65c-.17-.02-.37-.02-.77-.02h-9.9c-.4 0-.6 0-.76.02a4 4 0 0 0-3.65 3.65z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M13.38 21.38h-2.77c-3.77 0-5.66 0-6.83-1.17s-1.17-3.05-1.17-6.83v-2.76c0-3.78 0-5.66 1.17-6.83s3.06-1.17 6.83-1.17h2.77c3.77 0 5.66 0 6.83 1.17s1.17 3.05 1.17 6.83v2.76c0 3.78 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17'
        stroke='currentColor'
      />
      <path d='M6.01 7.05h2.1' stroke='currentColor' />
      <path d='M17.98 7.05h-2.1' stroke='currentColor' />
      <path d='M11.05 7.1h1.85' stroke='currentColor' />
    </svg>
  )
}
