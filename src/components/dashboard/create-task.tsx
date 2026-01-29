'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props {
  className?: string;
  navigateUrl: string;
  labelBtn: string;
}

export default function CreateTask({
  className,
  navigateUrl,
  labelBtn,
}: Props) {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('http://localhost:8080/api/todolist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        time,
        description,
        color: 'bg-blue-500/20',
      }),
    });

    router.push(navigateUrl);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('space-y-4 rounded-xl bg-white p-6 shadow', className)}
    >
      <Input
        placeholder="Titre de la tâche"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <Input
        placeholder="Heure (ex: 10:00 - 11:00)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />

      <Textarea
        placeholder="Description de la tâche"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <Button className="w-full" type="submit">
        {labelBtn}
      </Button>
    </form>
  );
}
