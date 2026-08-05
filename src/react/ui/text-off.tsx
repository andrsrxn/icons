import type { Icon } from './types'

export const IconTextOff: Icon = ({
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
      data-slot='text-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='m17.105 4.003.039-.75-.04.75Zm1.145 2.13a.75.75 0 0 0 1.5 0h-1.5Zm.747-.238.75-.039-.75.04Zm-12-1.892-.04-.75.04.75ZM12.801 4a.75.75 0 1 0-1.5 0h1.5ZM9.846 19.25a.75.75 0 0 0 0 1.5v-1.5Zm4.41 1.5a.75.75 0 0 0 0-1.5v1.5Zm5.23-.204a.75.75 0 0 0 1.06-1.06l-.53.53-.53.53ZM4.513 3.454a.75.75 0 0 0-1.06 1.06l.53-.53.53-.53ZM7.235 4v.75h9.632v-1.5H7.235V4Zm9.632 0v.75c.133 0 .17 0 .198.002l.04-.75.039-.748c-.077-.004-.163-.004-.277-.004V4ZM19 6.133h.75c0-.114 0-.2-.004-.277l-.749.04-.749.039c.002.027.002.065.002.198H19Zm-1.895-2.13-.04.749a1.25 1.25 0 0 1 1.183 1.183l.75-.04.748-.039a2.75 2.75 0 0 0-2.602-2.602l-.04.749ZM7.235 4v-.75c-.114 0-.2 0-.277.004l.039.749.04.749c.027-.002.065-.002.198-.002V4Zm4.816 0h-.75v16h1.5V4h-.75Zm0 16v-.75H9.846v1.5h2.205V20Zm0 0v.75h2.205v-1.5H12.05V20Zm7.965.016.53-.53L5.778 4.718l-.53.53-.53.53 14.767 14.768.53-.53ZM5.248 5.248l.53-.53-1.264-1.264-.53.53-.53.53 1.264 1.264.53-.53Zm0 0 .695.282a1.25 1.25 0 0 1 1.093-.778l-.039-.75-.04-.748a2.75 2.75 0 0 0-2.404 1.712l.695.282Z'
      />
    </svg>
  )
}
