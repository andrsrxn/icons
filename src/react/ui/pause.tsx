import type { Icon } from './types'

export const IconPause: Icon = ({
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
      data-slot='pause'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M5.37 6.5c0-.93 0-1.4.2-1.75q.2-.35.55-.55c.35-.2.81-.2 1.75-.2s1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75v11c0 .93 0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2s-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55c-.2-.35-.2-.82-.2-1.75zm8.26 0c0-.93 0-1.4.2-1.75q.2-.35.55-.55c.35-.2.82-.2 1.75-.2s1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75v11c0 .93 0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.81.2-1.75.2s-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55c-.2-.35-.2-.82-.2-1.75z'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M5.37 6.5c0-.93 0-1.4.2-1.75q.2-.35.55-.55c.35-.2.81-.2 1.75-.2s1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75v11c0 .93 0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.82.2-1.75.2s-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55c-.2-.35-.2-.82-.2-1.75zm8.26 0c0-.93 0-1.4.2-1.75q.2-.35.55-.55c.35-.2.82-.2 1.75-.2s1.4 0 1.75.2q.35.2.55.55c.2.35.2.82.2 1.75v11c0 .93 0 1.4-.2 1.75a1.5 1.5 0 0 1-.55.55c-.35.2-.81.2-1.75.2s-1.4 0-1.75-.2a1.5 1.5 0 0 1-.55-.55c-.2-.35-.2-.82-.2-1.75z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
