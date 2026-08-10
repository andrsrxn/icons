import type { Icon } from './types'

export const IconBabyBottle: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='baby-bottle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='10.42'
        y='7.92'
        width='8.01'
        height='10.71'
        rx='2'
        transform='rotate(45 10.42 7.92)'
        fill='#000'
      />
      <path
        d='m10.42 7.92-4.75 4.75c-1.33 1.33-2 2-2 2.82 0 .83.67 1.5 2 2.83 1.34 1.34 2 2 2.84 2s1.5-.66 2.83-2l4.74-4.74'
        stroke='#000'
        strokeWidth='1.5'
      />
      <rect
        x='9.72'
        y='7.22'
        width='2.84'
        height='9.98'
        rx='1'
        transform='rotate(-45 9.72 7.22)'
        stroke='#000'
        strokeWidth='1.5'
      />
      <path
        d='m17.75 11.23.55-2.8c.1-.45.5-.76.91-.95a2.03 2.03 0 1 0-2.7-2.7c-.18.43-.5.83-.94.92l-2.8.56m-2.24 6.84-.91-.91m-1.36 3.18-.91-.9'
        stroke='#000'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        opacity='.2'
        d='m18.68 3.82.18.06a2 2 0 0 1 1.26 1.27l.05.15a2 2 0 0 1-.48 2.04l-.12.12a1.3 1.3 0 0 1-.5.3c-.39.15-.7.46-.82.86l-.02.08a1.45 1.45 0 0 1-2.41.6l-1.29-1.28a1.35 1.35 0 0 1 .7-2.28l.13-.03c.42-.08.76-.38.89-.8q.08-.27.28-.47l.15-.15c.52-.52 1.3-.7 2-.47'
        fill='#000'
      />
    </svg>
  )
}
