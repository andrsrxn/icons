import type { Icon } from './types'

export const IconMap: Icon = ({
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
      data-slot='ui-icon-map'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M2.7 6.9c0-.7 0-1.04.19-1.3.19-.27.52-.38 1.18-.6l1.86-.6c1.2-.4 1.8-.6 2.2-.3.42.3.42.94.42 2.2v10.07c0 .7 0 1.06-.2 1.32-.18.27-.52.37-1.19.59l-1.85.6c-1.2.37-1.8.56-2.2.27s-.41-.93-.41-2.18zm12.2.7c0-.7 0-1.05.18-1.3.2-.27.52-.38 1.19-.6l1.85-.6c1.2-.4 1.8-.6 2.21-.3.42.3.42.93.42 2.2v10.07c0 .7 0 1.06-.2 1.32-.19.26-.52.37-1.2.59l-1.85.59c-1.2.38-1.79.57-2.2.27-.4-.3-.4-.92-.4-2.18z'
        fill='currentColor'
      />
      <path
        d='m20.73 17.24-.14-10.63c-.02-1.48-.03-2.23-.47-2.52s-1.18 0-2.66.6c-.94.37-1.91.67-2.65.67-2 0-4.42-1.8-6.42-1.8-1.3 0-3.3.76-4.55 1.29-.54.23-.81.34-.98.6-.16.24-.16.55-.16 1.16v10.7c0 1.38 0 2.06.42 2.36s1.1.06 2.45-.42h0c1.06-.38 2.16-.7 2.82-.7 1.56 0 4.52 1.86 6.42 1.86 1.24 0 3.4-.8 4.74-1.35.57-.24.85-.35 1.02-.6.17-.27.17-.58.16-1.22M8.55 18.51V4M15 20.4V5.9'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
