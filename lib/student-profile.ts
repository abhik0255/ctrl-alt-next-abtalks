"use client";

import { useState, useEffect, useCallback } from "react";

export type StudentProfile = {
  id: string;
  name: string;
  avatarInitials: string;
  cohort: string;
  startDate: string;
  currentDay: number;
  streak: number;
  bestStreak: number;
  totalCompleted: number;
  daysMissed: number;
  standing: string;
};

const STORAGE_KEY = "abtalks_student_profile";

/**
 * Generate initials from full name
 */
export function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((n) => n[0].toUpperCase())
    .slice(0, 2)
    .join("");
}

/**
 * Validate student name: alphabets and spaces only, min 2 chars
 */
export function validateStudentName(name: string): string | null {
  const trimmed = name.trim();
  if (!trimmed) return "Please enter a valid name";
  if (trimmed.length < 2) return "Please enter a valid name";
  if (!/^[A-Za-z\s]+$/.test(trimmed)) return "Please enter a valid name";
  return null;
}

/**
 * Load student profile from localStorage
 */
export function loadStudentProfile(): StudentProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Validate the stored profile has all required fields
      if (parsed && parsed.name && parsed.avatarInitials) {
        return parsed as StudentProfile;
      }
    }
  } catch {
    // Ignore parse errors
  }
  return null;
}

/**
 * Save student profile to localStorage
 */
export function saveStudentProfile(profile: StudentProfile): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch {
    // Ignore write errors
  }
}

/**
 * Hook for managing student profile state
 */
export function useStudentProfile() {
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load on mount
  useEffect(() => {
    const stored = loadStudentProfile();
    if (stored) {
      setProfile(stored);
    }
    // No stored profile — keep profile as null to trigger onboarding
    setIsLoaded(true);
  }, []);

  const updateProfile = useCallback((newProfile: StudentProfile) => {
    setProfile(newProfile);
    saveStudentProfile(newProfile);
  }, []);

  const setName = useCallback((name: string) => {
    const trimmed = name.trim();
    const initials = getInitials(trimmed);
    const newProfile: StudentProfile = {
      id: `stu_${Date.now()}`,
      name: trimmed,
      avatarInitials: initials,
      cohort: "ABTalks Cohort — Mock 2026",
      startDate: new Date().toISOString().split("T")[0],
      currentDay: 1,
      streak: 0,
      bestStreak: 0,
      totalCompleted: 0,
      daysMissed: 0,
      standing: "Just getting started",
    };
    updateProfile(newProfile);
  }, [updateProfile]);

  const resetProfile = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setProfile(null);
  }, []);

  return {
    profile,
    isLoaded,
    setName,
    updateProfile,
    resetProfile,
    validateName: validateStudentName,
    getInitials,
  };
}