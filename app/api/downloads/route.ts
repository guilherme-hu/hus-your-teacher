import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'downloads.json');

export async function GET(req: NextRequest) {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch (e) {
    // Se não existir, retorna objeto vazio
    return NextResponse.json({});
  }
}

export async function POST(req: NextRequest) {
  const { filePath } = await req.json();
  let data: Record<string, number> = {};
  try {
    const file = await fs.readFile(DATA_FILE, 'utf-8');
    data = JSON.parse(file);
  } catch {}
  data[filePath] = (data[filePath] || 0) + 1;
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
  return NextResponse.json({ downloads: data[filePath] });
}
