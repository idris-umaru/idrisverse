import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects';

export function load({ params }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    error(404, 'Project not found');
  }

  return { project };
}
