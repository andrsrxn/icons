import type { Icon } from './types'

export const IconFolderHeart: Icon = ({
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
      data-slot='folder-heart'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M20.274 11.686v1.985c-.258-.366-.668-.647-1.199-.647-.76 0-1.325.62-1.512.931-.187-.31-.752-.93-1.513-.93-.95 0-1.512.898-1.512 1.58 0 1.531 1.053 2.324 2.018 3.05.366.276.72.542.997.835-.37.01-.793.01-1.279.01H7.726c-1.886 0-2.829 0-3.414-.586-.586-.586-.586-1.528-.586-3.414V7.357c0-1.026.831-1.857 1.857-1.857h2.962c.578 0 .867 0 1.134.076a2 2 0 0 1 .513.228c.236.147.43.36.818.789.388.428.582.642.818.79a2 2 0 0 0 .513.227c.267.076.556.076 1.134.076h2.8c1.885 0 2.828 0 3.413.586.586.585.586 1.528.586 3.414Zm-2.721 6.804h.02l-.01.01-.01-.01Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12.488 18.5H7.726c-1.886 0-2.829 0-3.414-.586-.586-.586-.586-1.528-.586-3.414V7.357c0-1.026.831-1.857 1.857-1.857h2.962c.578 0 .867 0 1.134.076a2 2 0 0 1 .513.228c.236.147.43.36.818.789.388.428.582.642.818.79a2 2 0 0 0 .513.227c.267.076.556.076 1.134.076h4.21c.548 0 .822 0 1.048.053a2 2 0 0 1 1.488 1.488c.053.226.053.5.053 1.049m-2.711 3.68c-.187-.311-.752-.932-1.513-.932-.95 0-1.512.899-1.512 1.58 0 2.12 2.017 2.825 3.025 3.896 1.008-1.071 3.025-1.776 3.025-3.896 0-.681-.562-1.58-1.513-1.58-.76 0-1.325.62-1.512.931Z'
      />
    </svg>
  )
}
