import type { Icon } from './types'

export const IconShirt: Icon = ({
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
      data-slot='ui-icon-shirt'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M12.45 5.97c-1.48 0-2.08-.95-2.33-1.73-.17-.52-.62-.98-1.17-.98H7.53a1 1 0 0 0-.76.35l-4.28 5a1 1 0 0 0 .42 1.59l3 1.09a1 1 0 0 0 1.34-.94v9.35a1 1 0 0 0 1 1l7.65.03a1 1 0 0 0 1-1v-9.57a1 1 0 0 0 1.3.95l3.12-.98a1 1 0 0 0 .5-1.54l-3.56-4.9a1 1 0 0 0-.83-.42l-1.5.04c-.55.01-.99.46-1.15.98a2.3 2.3 0 0 1-2.33 1.68'
        fill='currentColor'
      />
      <path
        d='M16.9 9.7c0 .96 0 1.43.2 1.7a1 1 0 0 0 .68.39c.34.04.75-.2 1.57-.69l.72-.42c.82-.49 1.23-.73 1.33-1.13s-.14-.82-.63-1.63L18.8 4.66c-.24-.4-.36-.6-.5-.75a2 2 0 0 0-1.08-.59c-.2-.04-.44-.03-.9-.02-.37 0-.55.01-.66.04-.3.08-.34.1-.54.35-.07.08-.2.38-.5.97-.3.66-.93 1.3-2.17 1.3a2.2 2.2 0 0 1-2.16-1.3c-.31-.63-.46-.95-.54-1.05-.2-.22-.24-.24-.52-.32-.12-.03-.32-.03-.73-.03-.44 0-.65 0-.86.04a2 2 0 0 0-.9.45c-.15.13-.28.3-.55.65L3.58 7.84c-.65.84-.97 1.26-.88 1.7.09.45.55.72 1.47 1.24l.61.35c.85.49 1.27.73 1.62.68a1 1 0 0 0 .63-.37c.22-.27.22-.76.22-1.73'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.28 10.44v6c0 1.88 0 2.82.59 3.4.58.6 1.53.6 3.41.6h1.63c1.89 0 2.83 0 3.42-.6.58-.58.58-1.52.58-3.4v-6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
