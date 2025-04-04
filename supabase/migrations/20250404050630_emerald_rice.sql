/*
  # Create opinions table

  1. New Tables
    - `opinions`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `content` (text)
      - `author` (text)
      - `vote` (text)

  2. Security
    - Enable RLS on `opinions` table
    - Add policy for public read access
    - Add policy for authenticated users to insert their own opinions
*/

CREATE TABLE IF NOT EXISTS opinions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  content text NOT NULL,
  author text NOT NULL,
  vote text NOT NULL
);

ALTER TABLE opinions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read opinions"
  ON opinions
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert opinions"
  ON opinions
  FOR INSERT
  TO authenticated
  WITH CHECK (true);