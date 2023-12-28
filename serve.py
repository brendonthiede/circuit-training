from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

if __name__ == '__main__':
    directory = 'public'
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)

    # Change the current working directory to the specified directory
    os.chdir(directory)
    print(f'Starting server at http://localhost:{server_address[1]}')
    httpd.serve_forever()
