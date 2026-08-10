import type { Icon } from './types'

export const IconTranslate: Icon = ({
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
      data-slot='translate'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m18.42 14.83-1.71-4.2a1 1 0 0 0-1.85 0l-1.72 4.2a1 1 0 0 0 .93 1.38h3.43a1 1 0 0 0 .92-1.38'
        fill='currentColor'
      />
      <path
        d='m17.27 11.99.69-.28zm2.62 8.44a.75.75 0 0 0 1.39-.57l-.7.28zm-9.6-.57a.75.75 0 1 0 1.39.57l-.7-.29zM14.3 12l-.7-.28zm-.27-5.25a.75.75 0 1 0 0-1.5zM9.27 12.1l-.54-.52zm-5.13 2.33a.75.75 0 1 0 .45 1.43l-.23-.71zm-.75-9.18a.75.75 0 1 0 0 1.5zm6.03-1.38a.75.75 0 1 0-1.5 0zM6.98 8.62a.75.75 0 0 0-1.06 1.06l.53-.53zm5.36 7.43A.75.75 0 0 0 13.39 15l-.52.53zM17.27 12l-.7.28 1.72 4.22.7-.28.69-.28-1.72-4.22zm1.71 4.22-.7.28 1.6 3.94.7-.29.7-.28-1.6-3.93zm-8 3.93.7.29 1.6-3.94-.7-.28-.7-.28-1.59 3.93zm1.6-3.93.7.28L15 12.27l-.7-.28-.7-.28-1.71 4.22zm6.4 0v-.75h-6.4v1.5h6.4zM17.27 12l.69-.28c-.3-.75-.56-1.4-.82-1.84-.24-.41-.65-.95-1.36-.95v1.5c-.17 0-.15-.15.06.2s.4.86.73 1.65zm-2.97 0 .7.28c.32-.8.53-1.31.73-1.64.2-.36.22-.21.05-.21v-1.5c-.7 0-1.11.54-1.35.95q-.38.7-.82 1.84zm-2.5-6v.75h2.23v-1.5h-2.22zm0 0h-.74a9 9 0 0 1-2.28 5.53l.55.51.54.52A10.6 10.6 0 0 0 12.56 6zm-2.47 6.04-.55-.51-.05.05.54.52.53.52.07-.06zm-.06.06-.54-.52a10.3 10.3 0 0 1-4.6 2.85l.23.72.23.71c1.19-.37 3.14-1.1 5.21-3.24zM3.39 6v.75h5.28v-1.5H3.4zm5.28 0v.75h3.14v-1.5H8.67zm0 0h.75V3.86h-1.5v2.13zM6.45 9.15l-.53.53 2.88 2.88.53-.53.53-.53-2.88-2.88zm2.88 2.88-.53.53 3.54 3.5.53-.54.52-.53-3.54-3.5z'
        fill='currentColor'
      />
    </svg>
  )
}
