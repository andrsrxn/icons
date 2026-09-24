import type { Icon } from './types'

export const IconHouseHeart: Icon = ({
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
      data-slot='icon-ui-house-heart'
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
        d='M8.67 21.74h-.28l-.27-.08-3.4-.97c-.73-.2-1.09-.31-1.3-.59s-.18-.65-.16-1.4l.33-8.98c.01-.44.02-.66.12-.85.1-.2.26-.34.6-.62l6.45-5.31c.6-.5.91-.76 1.27-.76s.67.25 1.28.76l6.44 5.31c.34.28.51.42.6.62.1.2.11.41.12.86l.3 8.95c.02.76.03 1.14-.17 1.42s-.57.38-1.3.58l-3.62.99-.26.06-.27.01zm1.98-4.92c.65.64.98.95 1.38.95s.73-.31 1.39-.94l2.06-1.98c.35-.35.53-.52.61-.75s.05-.47-.02-.96l-.05-.34c-.1-.83-.17-1.24-.45-1.49-.28-.24-.7-.24-1.53-.24H9.86c-.94 0-1.41 0-1.7.3-.3.28-.3.76-.3 1.7v.22c0 .42 0 .63.08.82s.23.33.53.62z'
        fill='currentColor'
      />
      <path
        d='M14.35 10.46c-1.2 0-2.06.9-2.34 1.34a3 3 0 0 0-2.33-1.34c-1.49 0-2.6 1.7-2.13 3.5.48 1.79 3.33 3.25 4.46 4.53 1.14-1.28 3.98-2.74 4.46-4.54.49-1.8-.63-3.5-2.12-3.5'
        stroke='currentColor'
      />
      <path
        d='M9.2 21.64h5.6c2.82 0 4.23 0 5.11-.88s.88-2.29.88-5.12v-3.7c0-1.28 0-1.92-.25-2.5-.25-.57-.72-1.01-1.66-1.89l-2.8-2.6h0c-1.93-1.8-2.9-2.7-4.08-2.7s-2.15.9-4.09 2.7l-2.79 2.6c-.94.88-1.41 1.32-1.66 1.9s-.25 1.2-.25 2.5v3.7c0 2.82 0 4.23.88 5.11s2.29.88 5.12.88'
        stroke='currentColor'
      />
    </svg>
  )
}
