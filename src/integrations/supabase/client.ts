// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ajiahdpiupgdfiyolcvu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqaWFoZHBpdXBnZGZpeW9sY3Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5OTg4MjEsImV4cCI6MjA2NDU3NDgyMX0.g42h5CWDMTDC0U7-ZsL-hS4Xy0y-VfrOYHynw233r30";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);