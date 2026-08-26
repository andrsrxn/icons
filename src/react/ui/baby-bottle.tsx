import type { Icon } from './types'

export const IconBabyBottle: Icon = ({
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
      data-slot='ui-icon-baby-bottle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='10.23'
        y='7.42'
        width='8.98'
        height='12.01'
        rx='2'
        transform='rotate(45 10.23 7.42)'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m19.38 2.79.43.14a2 2 0 0 1 1.26 1.27l.14.42a2 2 0 0 1-.48 2.05l-.24.24q-.23.23-.55.34c-.44.15-.79.51-.92.96l-.33 1.14a1 1 0 0 1-1.67.42l-2.2-2.23a1.53 1.53 0 0 1 .81-2.57l.14-.02a1.3 1.3 0 0 0 1-.9q.1-.3.32-.53l.24-.25a2 2 0 0 1 2.05-.48'
        fill='currentColor'
      />
      <path
        d='m10.23 7.42-5.66 5.66c-1.33 1.34-2 2-2 2.83s.67 1.5 2 2.83l.7.7c1.32 1.33 2 2 2.82 2 .83 0 1.5-.67 2.83-2l5.66-5.67'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='9.45'
        y='6.64'
        width='3.19'
        height='11.18'
        rx='1'
        transform='rotate(-45 9.45 6.64)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m18.45 11.13.49-2.45c.07-.35.1-.52.18-.66s.57-.58 1.55-1.47l.09-.08a2.28 2.28 0 1 0-3.31-3.13c-.88.97-1.32 1.46-1.46 1.54s-.32.12-.66.19l-2.46.49m-2.51 7.67-1.03-1.02m-1.52 3.57L6.8 14.76'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
