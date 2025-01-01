import Image from 'next/image';

export default function EmailTemplate({
    otp,
    confirmLink,
    brandName,
    brandLogo,
}: {
    otp: string;
    confirmLink: string;
    brandName: string;
    brandLogo?: string;
}) {
    return (
        <div
            style={{
                fontFamily: 'Arial, sans-serif',
                backgroundColor: '#f4f4f4',
                padding: '20px',
                margin: 0,
            }}
        >
            <div
                style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                {/* Header Section */}
                <div
                    style={{
                        textAlign: 'center',
                        padding: '20px',
                        borderBottom: '1px solid #ddd',
                    }}
                >
                    {brandLogo && (
                        <Image
                            src={brandLogo}
                            alt={`${brandName} Logo`}
                            style={{ height: '50px', marginBottom: '10px' }}
                            width={50}
                            height={50}
                        />
                    )}
                    <h1 style={{ fontSize: '24px', color: '#333' }}>
                        {brandName}
                    </h1>
                </div>

                {/* Body Section */}
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '20px', color: '#333' }}>
                        Confirm Your Action
                    </h2>
                    <p
                        style={{
                            fontSize: '16px',
                            color: '#666',
                            margin: '10px 0',
                        }}
                    >
                        Use the One-Time Password (OTP) below to complete your
                        request:
                    </p>
                    <div
                        style={{
                            fontSize: '32px',
                            fontWeight: 'bold',
                            color: '#007bff',
                            margin: '20px 0',
                        }}
                    >
                        {otp}
                    </div>
                    <p style={{ fontSize: '14px', color: '#999' }}>
                        This OTP is valid for the next 60 minutes.
                    </p>
                    <a
                        href={confirmLink}
                        style={{
                            display: 'inline-block',
                            padding: '12px 20px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#ffffff',
                            backgroundColor: '#007bff',
                            textDecoration: 'none',
                            borderRadius: '5px',
                            marginTop: '20px',
                        }}
                    >
                        Confirm Action
                    </a>
                </div>

                {/* Footer Section */}
                <div
                    style={{
                        textAlign: 'center',
                        padding: '20px',
                        borderTop: '1px solid #ddd',
                        fontSize: '12px',
                        color: '#666',
                    }}
                >
                    If you didn’t make this request, please ignore this email or
                    contact our support team.
                </div>
            </div>
        </div>
    );
}
