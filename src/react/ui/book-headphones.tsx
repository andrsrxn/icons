import type { Icon } from './types'

export const IconBookHeadphones: Icon = ({
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
      data-slot='ui-icon-book-headphones'
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
        d='M3.83 6.67c0-1.89 0-2.83.59-3.42s1.53-.58 3.41-.58h8.34c1.88 0 2.82 0 3.41.58.59.59.59 1.53.59 3.42v7.24c0 1.88 0 2.82-.59 3.4-.59.6-1.53.6-3.41.6H7.83c-1.88 0-2.82 0-3.41-.6-.59-.58-.59-1.52-.59-3.4zm12.93 5.53v.78c0 .84-1.17 1.52-2 1.52s-1.03-.68-1.03-1.52v-.78c0-.83.03-1.51.87-1.51.83 0 2.16.68 2.16 1.51m-7.38 2.3c-.84 0-2.19-.68-2.19-1.52v-.78c0-.83 1.35-1.51 2.2-1.51.83 0 .83.68.83 1.51v.78c0 .84 0 1.52-.84 1.52'
        fill='currentColor'
      />
      <path
        d='M3.83 8.67c0-2.83 0-4.25.88-5.12s2.3-.88 5.12-.88h4.34c2.82 0 4.24 0 5.12.88.88.87.88 2.29.88 5.12v3.24c0 2.82 0 4.24-.88 5.12s-2.3.88-5.12.88H3.83z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.83 17.9c0 1.34 0 2 .31 2.5a2 2 0 0 0 .63.63c.49.3 1.16.3 2.5.3h8.04c1.34 0 2 0 2.5-.3a2 2 0 0 0 .62-.63c.3-.5.3-1.16.3-2.5m-9.54-3.3a2 2 0 0 1 0-4h.27c.42 0 .76.33.76.75v2.48c0 .42-.34.76-.76.76zm6.42-4-.07-1.3a7 7 0 0 0-.07-.86A3 3 0 0 0 12.9 6c-.19-.02-.41-.02-.86-.02-.43 0-.65 0-.84.02a3 3 0 0 0-2.56 2.4 6 6 0 0 0-.09.84l-.1 1.36'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M14.76 14.6a2 2 0 0 0 0-4h-.27a.76.76 0 0 0-.76.75v2.48c0 .42.34.76.76.76z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
