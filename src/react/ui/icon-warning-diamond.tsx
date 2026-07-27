import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEwLjU3IDQuNzg4Yy42NzMtLjY4OSAxLjAxLTEuMDMzIDEuNDMtMS4wMzMuNDIgMCAuNzU3LjM0NCAxLjQzIDEuMDMzbDUuNjg0IDUuODE0Yy42NDUuNjYuOTY4Ljk5Ljk2OCAxLjM5OCAwIC40MDgtLjMyMy43MzgtLjk2OCAxLjM5OGwtNS42ODQgNS44MTRjLS42NzMuNjg5LTEuMDEgMS4wMzMtMS40MyAxLjAzMy0uNDIgMC0uNzU3LS4zNDQtMS40My0xLjAzM2wtNS42ODQtNS44MTRjLS42NDUtLjY2LS45NjgtLjk5LS45NjgtMS4zOTggMC0uNDA4LjMyMy0uNzM4Ljk2OC0xLjM5OGw1LjY4NC01LjgxNFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTIuNDEgMTUuNzRhLjM5Mi4zOTIgMCAxIDEtLjc4NCAwIC4zOTIuMzkyIDAgMCAxIC43ODQgMFoiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyLjAxOCAxMi43NDJWOC4yODRtLTcuMTMyIDUuMTE0IDUuNjg0IDUuODE0Yy42NzMuNjg5IDEuMDEgMS4wMzMgMS40MyAxLjAzMy40MiAwIC43NTctLjM0NCAxLjQzLTEuMDMzbDUuNjg0LTUuODE0Yy42NDUtLjY2Ljk2OC0uOTkuOTY4LTEuMzk4IDAtLjQwOC0uMzIzLS43MzgtLjk2OC0xLjM5OEwxMy40MyA0Ljc4OGMtLjY3My0uNjg5LTEuMDEtMS4wMzMtMS40My0xLjAzMy0uNDIgMC0uNzU3LjM0NC0xLjQzIDEuMDMzbC01LjY4NCA1LjgxNGMtLjY0NS42Ni0uOTY4Ljk5LS45NjggMS4zOTggMCAuNDA4LjMyMy43MzguOTY4IDEuMzk4Wm03LjUyNCAyLjM0MWEuMzkyLjM5MiAwIDEgMS0uNzg0IDAgLjM5Mi4zOTIgMCAwIDEgLjc4NCAwWiIvPjwvc3ZnPg==)
 */
export const IconWarningDiamond: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-warning-diamond'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M10.57 4.788c.673-.689 1.01-1.033 1.43-1.033.42 0 .757.344 1.43 1.033l5.684 5.814c.645.66.968.99.968 1.398 0 .408-.323.738-.968 1.398l-5.684 5.814c-.673.689-1.01 1.033-1.43 1.033-.42 0-.757-.344-1.43-1.033l-5.684-5.814c-.645-.66-.968-.99-.968-1.398 0-.408.323-.738.968-1.398l5.684-5.814Z'
        opacity='.2'
      />
      <path fill='currentColor' d='M12.41 15.74a.392.392 0 1 1-.784 0 .392.392 0 0 1 .784 0Z' />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12.018 12.742V8.284m-7.132 5.114 5.684 5.814c.673.689 1.01 1.033 1.43 1.033.42 0 .757-.344 1.43-1.033l5.684-5.814c.645-.66.968-.99.968-1.398 0-.408-.323-.738-.968-1.398L13.43 4.788c-.673-.689-1.01-1.033-1.43-1.033-.42 0-.757.344-1.43 1.033l-5.684 5.814c-.645.66-.968.99-.968 1.398 0 .408.323.738.968 1.398Zm7.524 2.341a.392.392 0 1 1-.784 0 .392.392 0 0 1 .784 0Z'
      />
    </svg>
  )
}
