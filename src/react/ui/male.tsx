import type { Icon } from './types'

export const IconMale: Icon = ({
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
      data-slot='male'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M10.18 14.91v-.52c0-.4-.26-.77-.6-.99a5.3 5.3 0 0 1-2.42-4.53c-.09-1.8.76-5.4 4.84-5.4 5.1 0 4.97 4.05 4.97 5.4 0 1.23-.27 3.59-2.53 4.59-.41.18-.72.57-.72 1.02v.41c0 .47.33.88.79 1.02.93.28 2.46.87 3.15 1.82.32.44.56 1.08.72 1.64.17.6-.3 1.15-.91 1.15H6.55c-.63 0-1.1-.56-.91-1.16.17-.56.41-1.2.73-1.63.68-.92 2.14-1.51 3.04-1.8.45-.15.77-.55.77-1.02Z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M10.18 14.91v-.52c0-.4-.26-.76-.63-.94-1.04-.5-2.4-1.56-2.4-4.58 0-2.79.77-5.4 4.85-5.4 5.1 0 5.13 3.18 5.13 5.4 0 2.02-.4 3.73-2.68 4.6a1.1 1.1 0 0 0-.73 1.01v.41c0 .47.33.88.79 1.02.93.28 2.46.87 3.15 1.82.32.44.56 1.08.72 1.64.17.6-.3 1.15-.91 1.15H6.55c-.63 0-1.1-.56-.91-1.16.17-.56.41-1.2.73-1.63.68-.92 2.14-1.51 3.04-1.8.45-.15.77-.55.77-1.02Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
