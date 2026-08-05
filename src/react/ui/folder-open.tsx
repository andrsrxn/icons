import type { Icon } from './types'

export const IconFolderOpen: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='folder-open'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M3.731 7.218v4.88c0 1.391.8 2.773 1.216 1.446.739-2.36 1.786-3.28 2.317-3.28h10.203a1.354 1.354 0 0 0 0-2.707h-5c-.443 0-.665 0-.875-.046a2.002 2.002 0 0 1-.525-.195c-.19-.103-.358-.247-.694-.536-.335-.29-.503-.434-.693-.536a2 2 0 0 0-.525-.195c-.21-.046-.432-.046-.875-.046H4.947c-.671 0-1.216.544-1.216 1.215Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9.004 18.695h6.782c1.46 0 2.19 0 2.726-.407s.733-1.11 1.126-2.516l.14-.499c.652-2.33.978-3.495.378-4.286-.6-.792-1.81-.792-4.23-.792H9.144c-1.46 0-2.19 0-2.726.407s-.733 1.11-1.126 2.516l-.14.499c-.652 2.33-.978 3.495-.378 4.286.6.792 1.81.792 4.23.792Zm0 0c-1.885 0-4.101 0-4.687-.586-.586-.586-.586-1.529-.586-3.415V7.218c0-.802.651-1.453 1.453-1.453H8.2c.44 0 .66 0 .87.045a2 2 0 0 1 .655.27c.18.115.336.27.65.581.312.31.468.466.648.58a2 2 0 0 0 .656.27c.209.046.43.046.87.046h3.565c.658 0 .987 0 1.256.076a2 2 0 0 1 1.375 1.375c.077.27.077.598.077 1.256'
      />
    </svg>
  )
}
