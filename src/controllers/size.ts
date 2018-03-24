import { Request, Response } from 'express';
import filesize from 'filesize';

function normalizeStats(req: Request) {
  const file = { ...req.file, size: filesize(req.file.size) };
  delete file.buffer;
  delete file.fieldname;
  delete file.encoding;
  return file;
}

/**
 * GET /size
 * Size index page
 */

export const index = (req: Request, res: Response) => {
  res.redirect('/');
};

/**
 * POST /size
 * Determine file metadata.
 */
export const size = (req: Request, res: Response) => {
  const file = normalizeStats(req);

  res.render('size', { title: 'Size | File Metadata Microservice', stats: file });
};
