import type { NextApiRequest } from 'next';

import notion from '@/services';

export const dynamic = 'auto';

export async function POST(req: NextApiRequest) {
  const { startCursor, pageSize } = req.body;

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID || '',
      start_cursor: startCursor,
      page_size: pageSize || 50,
      sorts: [
        {
          property: 'date',
          direction: 'descending',
        },
      ],
    });

    return Response.json({
      result: true,
      message: null,
      data: response,
    });
  } catch (error) {
    return Response.json({
      result: false,
      message: error instanceof Error ? error.message : 'Internal Server Error',
      data: null,
    });
  }
}
