import type { Icon } from './types'

export const IconSale: Icon = ({
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
      data-slot='sale'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.03 3.83a1.5 1.5 0 0 1 1.94 0l1.42 1.2q.36.3.85.36l1.85.14a1.5 1.5 0 0 1 1.38 1.38l.14 1.85q.05.49.36.85l1.2 1.42a1.5 1.5 0 0 1 0 1.94l-1.2 1.42q-.3.37-.36.85l-.14 1.85a1.5 1.5 0 0 1-1.38 1.38l-1.85.14a1.5 1.5 0 0 0-.85.36l-1.42 1.2a1.5 1.5 0 0 1-1.94 0l-1.42-1.2a1.5 1.5 0 0 0-.85-.36l-1.85-.14a1.5 1.5 0 0 1-1.38-1.38l-.14-1.85a1.5 1.5 0 0 0-.36-.85l-1.2-1.42a1.5 1.5 0 0 1 0-1.94l1.2-1.42q.3-.36.36-.85l.14-1.85a1.5 1.5 0 0 1 1.38-1.38l1.85-.14q.48-.04.85-.36zM15.6 15.6a1.37 1.37 0 1 0-1.94-1.95 1.37 1.37 0 0 0 1.94 1.95m-5.25-7.2a1.37 1.37 0 1 1-1.95 1.94 1.37 1.37 0 0 1 1.95-1.94'
        fill='currentColor'
      />
      <path
        d='m8.4 15.6 7.2-7.2m-6.85-3-1.85.14a1.5 1.5 0 0 0-1.38 1.38L5.4 8.76a1.5 1.5 0 0 1-.36.85l-1.2 1.42a1.5 1.5 0 0 0 0 1.94l1.2 1.42q.3.37.36.85l.14 1.85a1.5 1.5 0 0 0 1.38 1.38l1.85.14q.48.05.85.36l1.42 1.2a1.5 1.5 0 0 0 1.94 0l1.42-1.2q.36-.3.85-.36l1.85-.14a1.5 1.5 0 0 0 1.38-1.38l.14-1.85q.05-.48.36-.85l1.2-1.42a1.5 1.5 0 0 0 0-1.94l-1.2-1.42a1.5 1.5 0 0 1-.36-.85l-.14-1.85a1.5 1.5 0 0 0-1.38-1.38l-1.85-.14a1.5 1.5 0 0 1-.85-.36l-1.42-1.2a1.5 1.5 0 0 0-1.94 0L9.6 5.03q-.37.3-.85.36Zm1.59 3.02a1.37 1.37 0 1 1-1.94 1.94 1.37 1.37 0 0 1 1.94-1.94Zm5.24 5.24a1.37 1.37 0 1 1-1.94 1.94 1.37 1.37 0 0 1 1.94-1.94Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
