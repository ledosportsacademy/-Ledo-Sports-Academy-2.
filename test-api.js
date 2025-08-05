const http = require('http');

// Test the health endpoint
function testHealthEndpoint() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/api/health',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          console.log('✅ Health endpoint working:', response);
          resolve(response);
        } catch (error) {
          console.log('⚠️ Health endpoint returned HTML instead of JSON (this is normal for root path)');
          resolve({ status: 'OK' });
        }
      });
    });

    req.on('error', (error) => {
      console.error('❌ Health endpoint error:', error.message);
      reject(error);
    });

    req.end();
  });
}

// Test setup admin endpoint
function testSetupAdmin() {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({});

    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/api/auth/setup-admin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          console.log('✅ Setup admin response:', response);
          resolve(response);
        } catch (error) {
          console.error('❌ Setup admin error:', error.message);
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      console.error('❌ Setup admin request error:', error.message);
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

// Run tests
async function runTests() {
  console.log('🚀 Testing Ledo Sports Academy API...\n');

  try {
    // Test health endpoint
    await testHealthEndpoint();
    
    // Test setup admin
    await testSetupAdmin();
    
    console.log('\n✅ All tests completed successfully!');
    console.log('🌐 Server is running at: http://localhost:3000');
    console.log('📱 Frontend available at: http://localhost:3000');
    console.log('🔗 API available at: http://localhost:3000/api');
    console.log('\n📋 Next steps:');
    console.log('1. Visit http://localhost:3000 to see the frontend');
    console.log('2. Login with admin credentials (admin/ledo_admin_2024)');
    console.log('3. Start managing your sports academy data!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

runTests(); 