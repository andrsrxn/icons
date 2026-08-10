import type { Icon } from './types'

export const IconMouseRightClick: Icon = ({
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
      data-slot='mouse-right-click'
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
        d='M11.98 5.34c0-.86.9-1.41 1.67-1.03l2.12 1.07a2.6 2.6 0 0 1 1.44 2.34v7.6a5.23 5.23 0 0 1-5.23 5.23h-.73a4.5 4.5 0 0 1-4.5-4.5v-1.88a2.6 2.6 0 0 1 2.61-2.61h1.44c.65 0 1.18-.53 1.18-1.18V9.7c0-.28.23-.51.5-.51a.5.5 0 0 0 .52-.51V7a.5.5 0 0 0-.51-.5.5.5 0 0 1-.51-.52z'
        fill='currentColor'
      />
      <path
        d='M11.98 6.15V5.4zm0 3.26v.75zM17.6 3.5a.75.75 0 1 0 1.2.9l-.6-.45zm1.87.02a.75.75 0 1 0-1.2-.9l.6.45zm-.02 2.3a.75.75 0 0 0-.01 1.5v-.75zm1.06 1.5a.75.75 0 1 0 .02-1.5l-.01.76zm-3.31 1.4h-.75v6.64h1.5V8.7zM6.75 15.34h.75V8.7H6v6.65zm5.23 5.23v-.75c-2.48 0-4.48-2-4.48-4.48H6c0 3.3 2.68 5.98 5.98 5.98zm5.23-5.23h-.75c0 2.48-2 4.48-4.48 4.48v1.5c3.3 0 5.98-2.68 5.98-5.98zM11.98 3.47v.75a4.5 4.5 0 0 1 4.48 4.48h1.5c0-3.3-2.68-5.98-5.98-5.98zm0 0v-.75A6 6 0 0 0 6 8.7h1.5c0-2.47 2-4.48 4.48-4.48zm1.25 4.69h.75V7.4h-1.5v.76zm0-.76h.75a2 2 0 0 0-2-2v1.5c.28 0 .5.22.5.5zm-1.25-1.25V5.4h-.03v.75l.01.75H12zm-.02 0-.01-.75a2 2 0 0 0-1.97 2h1.5c0-.28.22-.5.49-.5zM10.73 7.4h-.75v.76h1.5V7.4zm0 .76h-.75a2 2 0 0 0 1.97 2v-.75l.02-.75a.5.5 0 0 1-.5-.5zm1.23 1.25v.75h.01zl.02-.75h-.03zm.02 0v.75a2 2 0 0 0 2-2h-1.5a.5.5 0 0 1-.5.5zm-.02 2.15v-.75h-5.1v1.5h5.1zm0 0v.75h5.27v-1.5h-5.27zm0-7.56h-.75v2.15h1.5V4zm0 5.41h-.75v2.15h1.5V9.4zm6.25-5.47.6.45.67-.88-.6-.45-.6-.45-.67.88zm1.24 2.62v.75h1.07v-.74l.02-.75-1.08-.01z'
        fill='currentColor'
      />
    </svg>
  )
}
