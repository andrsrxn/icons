import type { Icon } from './types'

export const IconPencilRuler: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-pencil-ruler'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='6.76'
        y='13.34'
        width='7'
        height='9.3'
        rx='2'
        transform='rotate(-135 6.76 13.34)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='15.61'
        y='22.19'
        width='7.21'
        height='9.3'
        rx='2'
        transform='rotate(-135 15.61 22.19)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='5.23'
        height='5.86'
        rx='1'
        transform='scale(1 -1)rotate(45 21.1 17.2)'
        fill='currentColor'
      />
      <path
        d='m18.4 9.08-3.12-3.12m-10.3 15.3c.82 0 1.23 0 1.6-.15.36-.15.65-.44 1.23-1.02L20.23 7.67a5 5 0 0 0 .92-1.05 2 2 0 0 0 0-1.84 5 5 0 0 0-.92-1.05 5 5 0 0 0-1.05-.92 2 2 0 0 0-1.84 0c-.28.15-.53.4-1.05.92L3.87 16.15c-.58.58-.87.87-1.02 1.24-.15.36-.15.77-.15 1.6v.27c0 .95 0 1.42.29 1.71.3.3.76.3 1.7.3zM17.37 10.8l2 1.99c1.32 1.33 2 2 2 2.82 0 .83-.68 1.5-2 2.83l-.93.92c-1.33 1.33-2 2-2.83 2-.82 0-1.5-.67-2.82-2l-2-1.99M13.08 6.5l-1.87-1.86c-1.33-1.33-2-2-2.82-2-.83 0-1.5.67-2.83 2l-.92.92c-1.33 1.33-2 2-2 2.83 0 .82.67 1.5 2 2.82l1.86 1.87M11 4.63 8.34 7.29m10.87 5.43-2.66 2.66'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
