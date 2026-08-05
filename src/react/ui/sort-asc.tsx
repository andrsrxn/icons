import type { Icon } from './types'

export const IconSortAsc: Icon = ({
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
      data-slot='sort-asc'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M4 18.25a.75.75 0 0 0 0 1.5v-1.5Zm13.127 1.5a.75.75 0 0 0 0-1.5v1.5ZM4 12.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm5.877-8.365a.75.75 0 0 0-1.5 0h1.5ZM16.377 15a.75.75 0 0 0 1.5 0h-1.5ZM4 6.25a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm9.735.787a.75.75 0 0 0 1.038-1.083l-.52.541-.518.542Zm-1.222-2.211.519-.541-.52.541Zm-2.767-.001-.519-.542.519.542Zm-2.264 1.128a.75.75 0 0 0 1.037 1.084L14 7.995l-.518-.542Zm3.648-2.068v.75-.75ZM4 19v.75h13.127v-1.5H4V19Zm0-6v.75h8v-1.5H4V13Zm13.127-7.615h-.75V15h1.5V5.385h-.75ZM4 7v.75h6v-1.5H4V7Zm16.254.995.519-.541-1.741-1.67-.52.542-.518.541 1.74 1.67.52-.542Zm-4.508-1.67-.519-.542-1.745 1.67.518.542.518.542 1.746-1.67-.518-.542Zm2.767.001.519-.541c-.312-.3-.599-.576-.862-.77-.28-.205-.617-.38-1.04-.38v1.5s.004 0 .013.004c.021.009.065.03.14.086.165.12.369.314.71.642l.52-.541Zm-2.767-.001.518.541c.343-.327.547-.52.712-.641a.693.693 0 0 1 .14-.086l.014-.004c-.001 0-.001 0 0 0v-1.5c-.423 0-.76.174-1.04.38-.264.192-.55.469-.863.768l.519.542Z'
      />
    </svg>
  )
}
