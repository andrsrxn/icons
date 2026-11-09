import type { Icon } from './types'

export const IconLike: Icon = ({
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
      data-slot='icon-ui-like'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M4 21.14c-.94 0-1.41 0-1.7-.3-.3-.28-.3-.76-.3-1.7v-7.16c0-.94 0-1.42.3-1.7.29-.3.76-.3 1.7-.3h1.5c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v7.16c0 .94 0 1.42-.3 1.7-.29.3-.76.3-1.7.3z'
        fill='currentColor'
      />
      <path
        d='M7.72 21.3h5.6c2.54 0 3.81 0 4.81-.65s1.5-1.82 2.52-4.15l.29-.64c1.1-2.53 1.65-3.8 1.06-4.7-.6-.9-1.97-.9-4.73-.9h-.88c-1.23 0-1.85 0-2.15-.34s-.2-1.02-.03-2.39c.15-1.22.15-2.6-.4-3.54-.5-.86-1.55-1.16-2.49-1.25-.7-.06-1.05-.1-1.37.17-.31.26-.36.71-.45 1.62-.06.57-.16 1.21-.32 1.81a16 16 0 0 1-1.63 3.31h-1.8c-1.88 0-2.82 0-3.4.59-.6.59-.6 1.53-.6 3.41v3.65c0 1.89 0 2.83.6 3.42.58.58 1.52.58 3.4.58z'
        stroke='currentColor'
      />
      <path d='M7.5 9.82V21.3' stroke='currentColor' />
    </svg>
  )
}
