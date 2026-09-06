/** biome-ignore-all lint/performance/noJsxPropsBind: necessary to bind event handlers with target props */
'use client'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface IconGridPaginationProps {
  page: number
  totalPages: number
  pagesToShow: number[]
  onPageChange: (page: number) => void
}

export const IconGridPagination = ({
  page,
  totalPages,
  pagesToShow,
  onPageChange,
}: IconGridPaginationProps) => {
  if (totalPages <= 1) {
    return null
  }

  const [firstShown] = pagesToShow
  const lastShown = pagesToShow.at(-1)

  const handleClick = (e: React.MouseEvent, targetPage: number) => {
    e.preventDefault()
    onPageChange(targetPage)
  }

  return (
    <Pagination>
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`/icons/?page=${page - 1}`}
              onClick={e => handleClick(e, page - 1)}
            />
          </PaginationItem>
        )}

        {firstShown && firstShown > 1 && (
          <>
            <PaginationItem>
              <PaginationLink href='/icons/?page=1' onClick={e => handleClick(e, 1)}>
                1
              </PaginationLink>
            </PaginationItem>
            {firstShown > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
          </>
        )}

        {pagesToShow.map(p => (
          <PaginationItem key={p}>
            <PaginationLink
              href={`/icons/?page=${p}`}
              onClick={e => handleClick(e, p)}
              isActive={page === p}>
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {lastShown && lastShown < totalPages && (
          <>
            {lastShown < totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink
                href={`/icons/?page=${totalPages}`}
                onClick={e => handleClick(e, totalPages)}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {page < totalPages && (
          <PaginationItem>
            <PaginationNext
              href={`/icons/?page=${page + 1}`}
              onClick={e => handleClick(e, page + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}
