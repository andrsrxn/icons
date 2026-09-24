import type { Icon } from './types'

export const IconPencilRuler: Icon = ({
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
      data-slot='icon-ui-pencil-ruler'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='6.71'
        y='13.35'
        width='7.08'
        height='9.4'
        rx='2'
        transform='rotate(-135 6.71 13.35)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='15.66'
        y='22.29'
        width='7.29'
        height='9.4'
        rx='2'
        transform='rotate(-135 15.66 22.3)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='5.11'
        height='5.72'
        rx='1'
        transform='scale(1 -1)rotate(45 20.82 17.62)'
        fill='currentColor'
      />
      <path d='M18.71 8.88 15 5.16' stroke='currentColor' />
      <path
        d='m17.44 10.78 2.04 2.04c1.33 1.33 2 2 2 2.83s-.67 1.5-2 2.83l-1 .99c-1.33 1.33-2 2-2.82 2-.83 0-1.5-.67-2.83-2l-2.04-2.04'
        stroke='currentColor'
      />
      <path
        d='m13.1 6.44-1.92-1.92c-1.33-1.33-2-2-2.83-2s-1.5.67-2.83 2l-.98 1c-1.34 1.33-2 2-2 2.82 0 .83.66 1.5 2 2.83l1.91 1.92'
        stroke='currentColor'
      />
      <path d='m11 4.54-2.7 2.7' stroke='currentColor' />
      <path d='m19.3 12.72-2.7 2.7' stroke='currentColor' />
      <path
        d='M6.76 20.48c.49-.14.73-.2.95-.33s.4-.3.76-.66L20.5 7.63a5 5 0 0 0 1.09-1.26 2 2 0 0 0 0-1.64 5 5 0 0 0-1.07-1.26 5 5 0 0 0-1.26-1.07 2 2 0 0 0-1.63 0c-.33.15-.64.45-1.25 1.06L4.4 15.41c-.36.36-.54.54-.67.76s-.2.46-.34.95l-.37 1.24c-.44 1.54-.67 2.3-.25 2.73.42.41 1.19.2 2.72-.25z'
        stroke='currentColor'
      />
    </svg>
  )
}
