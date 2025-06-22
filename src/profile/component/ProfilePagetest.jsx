








import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/rtk/store";
import ProfilePage from "@/profile/component/ProfilePage";
import { vi } from "vitest";

// Partially mock the createApi module
vi.mock("@/rtk/createApi", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useFetchUserProfileQuery: vi.fn(),
  };
});

describe("ProfilePage Component", () => {
  const renderWithStore = (mockResponse) => {
    import("@/rtk/createApi").then((module) => {
      module.useFetchUserProfileQuery.mockReturnValue(mockResponse);
    });

    render(
      <Provider store={store}>
        <ProfilePage />
      </Provider>
    );
  };

  test("renders loading state", () => {
    renderWithStore({ isLoading: true });

    expect(screen.getByText("Loading profile...")).toBeInTheDocument();
  });

  test("renders error state", () => {
    renderWithStore({ error: true });

    expect(screen.getByText("Error loading profile")).toBeInTheDocument();
  });

  test("renders no profile data", () => {
    renderWithStore({ data: null });

    expect(screen.getByText("No profile data available")).toBeInTheDocument();
  });

  test("renders profile details", () => {
    const mockProfile = {
      id: "123",
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      phone_number: "1234567890",
      date_of_birth: "1990-01-01",
      address: "123 Main St",
      branch_id: "B001",
      account_type: "Savings",
    };

    renderWithStore({ data: mockProfile });

    expect(screen.getByText("Profile ID")).toBeInTheDocument();
    expect(screen.getByText(mockProfile.id)).toBeInTheDocument();
    expect(screen.getByText(mockProfile.first_name)).toBeInTheDocument();
    expect(screen.getByText(mockProfile.last_name)).toBeInTheDocument();
    expect(screen.getByText(mockProfile.email)).toBeInTheDocument();
    expect(screen.getByText(mockProfile.phone_number)).toBeInTheDocument();
    expect(screen.getByText(mockProfile.date_of_birth)).toBeInTheDocument();
    expect(screen.getByText(mockProfile.address)).toBeInTheDocument();
    expect(screen.getByText(mockProfile.branch_id)).toBeInTheDocument();
    expect(screen.getByText(mockProfile.account_type)).toBeInTheDocument();
  });
});
